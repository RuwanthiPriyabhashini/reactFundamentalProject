import React from "react";
import NameList from "./components/pages/NameList/NameList";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
    <HeaderBar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element ={ <About /> } />
     <Route path="/namelist" element ={<NameList />} />
    </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
