import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="md:flex gap-3 hidden">
        <Link to="/" className="links">
          Inicio
        </Link>
        <span>|</span>
        <Link to="/about" className="links">
          Acerca de MACA
        </Link>
        <span>|</span>
        <Link to="/contact" className="links">
          Contacto
        </Link>
        <span>|</span>
        <Link to="/faq" className="links">
          Preguntas Frecuentes
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
