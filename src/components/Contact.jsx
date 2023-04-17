import React, { useRef, useState} from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { NavLink } from "react-router-dom";
// import sameeIcon from "./images/sameeIcon.jpg"









const Contact = ({props}) => {
  // const [ contact, setContact ] = useState(true)


  const History = (e) => {
    e.preventDefault();
    window.history.back();
  };


  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
 
    emailjs
      .send(
        'service_5miblhr',
        'template_nt6v6id',
        {
          from_name: form.name,
          to_name: "Samee-Yon",
          from_email: form.email,
          to_email: "",
          message: form.message,
        },
        'Dc7cCjwxW7ZQLCalm'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
  <div className="home_nav_flex product_nav">
        <div className="nav_icon">
            {/* <img src={sameeIcon} alt="sameeIcon" width={70}/> */}
        </div>
        <div className="nav_text">
            <h3>SAMEE-<span className="samee_red">YON</span></h3>
        </div>
        <div className="nav_items">
            <div className="check_item">
                <h5>
                <NavLink to="/ProductPage" className="avl_items">Avl Items</NavLink>
                </h5>
            </div>
            
        </div>
        
    </div>
  <div
      className="contact_head"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className="get_touch" >Send us Email  <span onClick={History} className="contact_back">x</span></h3>
        
        

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex-col'
        >
          <label className='flex-label'>
            <span className='text-white'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='contact_input'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='contact_input'
              required
            />
          </label>
          <label className='flex flex-col textera_input'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='contact_input'
              required
            />
          </label>

          <button
            type='submit'
            className='contact_button'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >

      </motion.div>
    </div>

</>
  );
};

export default SectionWrapper(Contact, "contact");