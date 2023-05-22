import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";
import "./index.css";
import About from "./components/About";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import Contacto from "./components/Contacto";
import Terminos from "./components/Terminos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const foot = false;
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca-de-maca" element={<About />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/preguntas-frecuentes"
            element={<PreguntasFrecuentes />}
          />
          <Route path="/terminos-y-condiciones" element={<Terminos />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
