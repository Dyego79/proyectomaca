import Header from "./components/Header";
import Inicio from "./es/components/Inicio";
import Home from "./en/components/Home";
import Footer from "./components/Footer";
import AcercaMaca from "./components/AcercaMaca";
import About from "./en/components/About";
import PreguntasFrecuentes from "./es/components/PreguntasFrecuentes";
import Frequentquestions from "./en/components/Frequentquestions";
import Contacto from "./es/components/Contacto";
import Contact from "./en/components/Contact";
import Terminos from "./es/components/Terminos";
import Terms from "./en/components/Terms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Providercontext } from "./context/ContextAPI";
import "./index.css";

function App() {
  return (
    <>
      <Providercontext>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/es" element={<Inicio />} />
            <Route path="/en" element={<Home />} />
            <Route path="es/acerca-de-maca" element={<AcercaMaca />} />
            <Route path="en/about" element={<About />} />
            <Route path="es/contacto" element={<Contacto />} />
            <Route path="en/contact" element={<Contact />} />
            <Route path="es/terminos-y-condiciones" element={<Terminos />} />
            <Route path="en/terms" element={<Terms />} />
            <Route
              path="es/preguntas-frecuentes"
              element={<PreguntasFrecuentes />}
            />
            <Route path="/en/faq" element={<Frequentquestions />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Providercontext>
    </>
  );
}

export default App;
