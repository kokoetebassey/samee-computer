import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Contact from "./components/Contact";
// import CardList from './components/CardList';




function App() {


  return (
    <div className="App">
      {/* <CardList cards={cards} /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="ProductPage" element={<ProductPage/>}></Route>
            <Route path="Contact" element={<Contact/>}></Route>
            {/* <Route path="CardList" element={<CardList/>}></Route> */}
          </Routes>
    </div>
  );
}

export default App;
