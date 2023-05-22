const NavbarMobile = () => {
  return (
    <>
      <nav className="flex flex-col gap-y-4">
        <Link to="/" className="">
          Inicio
        </Link>
        <Link to="acerca-de-maca" className="">
          Acerca de MACA
        </Link>
        <Link to="contacto" className="">
          Contacto
        </Link>{" "}
        <Link to="preguntas-frecuentes" className="">
          Preguntas Frecuentes
        </Link>
      </nav>
    </>
  );
};

export default NavbarMobile;
