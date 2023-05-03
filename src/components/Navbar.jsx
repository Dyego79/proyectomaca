const Navbar = () => {
  return (
    <>
      <nav className="md:flex gap-3 hidden">
        <a href="/inicio/" className="links">
          Inicio
        </a>
        <span>|</span>
        <a href="/acerca-de-maca/" className="links">
          Acerca de MACA
        </a>
        <span>|</span>
        <a href="/contacto/" className="links">
          Contacto
        </a>{" "}
        <span>|</span>
        <a href="/preguntas-frecuentes/" className="links">
          Preguntas Frecuentes
        </a>
      </nav>
    </>
  );
};

export default Navbar;
