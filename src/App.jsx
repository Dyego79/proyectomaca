import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";
import "./index.css";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/faq' element={<Faq />}></Route>
        </Routes>
        <Footer />
       </>
    </BrowserRouter>
  );
}

export default App;
