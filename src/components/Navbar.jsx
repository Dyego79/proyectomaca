import { Link } from "react-router-dom";
import useMain from "../useMain";

const Navbar = () => {
  const { handelEs, handelEn } = useMain();
  return (
    <>
      <nav className="md:flex gap-3 hidden">
        <Link to="/es" className="links">
          Inicio
        </Link>
        <span>|</span>
        <Link to="/acerca-de-maca" className="links">
          Acerca de MACA
        </Link>
        <span>|</span>
        <Link to="/contacto" className="links">
          Contacto
        </Link>
        <span>|</span>
        <Link to="/preguntas-frecuentes" className="links">
          Preguntas Frecuentes
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
