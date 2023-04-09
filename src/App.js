import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import MySwiper from "./components/MySwipe";



function App() {


  return (
    <div className="App">

          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="MySwiper" element={<MySwiper/>}></Route> */}
          </Routes>
    </div>
  );
}

export default App;
