import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";


function App() {


  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
    </div>
  );
}

export default App;
