import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";



function App() {


  return (
    <div className="App">

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="ProductPage" element={<ProductPage/>}></Route>
          </Routes>
    </div>
  );
}

export default App;
