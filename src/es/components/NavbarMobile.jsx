const NavbarMobile = () => {
  return (
    <>
      <nav className="flex flex-col gap-y-4">
        <a href="#" className="">
          Inicio
        </a>
        <a href="/acerca-de-maca/" className="">
          Acerca de MACA
        </a>
        <a href="/contacto/" className="">
          Contacto
        </a>{" "}
        <a href="/preguntas-frecuentes/" className="">
          Preguntas Frecuentes
        </a>
      </nav>
    </>
  );
};

export default NavbarMobile;
