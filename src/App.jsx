import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/core/navbar/Navbar";
// import Product from "./components/product/Product";
import Signup from "./view/signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          {/* <Route path='products' element={<Product />} /> */}
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
