import Logo from "../assets/Logo";
import Navbar from "./Navbar";
import Menulogo from "../assets/Menulogo";
import Backlogo from "../assets/Menulogo copy";
import { useState } from "react";
import { Link, NavLink, Router } from "react-router-dom";
import useMain from "../../useMain";

const Header = () => {
  const [nav, setNav] = useState(true);
  const { lang, handelEs, handelEn } = useMain();

  return (
    <>
      <nav className="container mx-auto my-5 boldFont text-slate-500 uppercase flex gap-4">
        <NavLink
          className="[&.active]:text-magentaMaca"
          to="/es"
          onClick={() => handelEs()}
        >
          Esp
        </NavLink>
        <NavLink
          className="[&.active]:text-magentaMaca"
          to="/en"
          onClick={() => handelEn()}
        >
          Eng
        </NavLink>
      </nav>
      <div className="bg-white/75 md:h-20 h-16 sticky top-0 backdrop-blur-lg flex items-center flex-row z-50">
        <div className="container mx-auto flex items-center justify-between">
          {nav ? (
            <Menulogo
              className="md:hidden ml-4 text-magentaMaca "
              height={35}
              width={35}
              style={{ fill: "rgb(233,75,115)" }}
              onClick={() => setNav(!nav)}
            />
          ) : (
            <Backlogo
              className="md:hidden ml-4 text-magentaMaca"
              height={35}
              width={35}
              style={{ fill: "rgb(233,75,115)" }}
              onClick={() => setNav(!nav)}
            />
          )}
          {lang == "es" ? (
            <Link
              to="/es"
              className="h-[100%] flex cursor-pointer mx-auto md:mx-0"
            >
              <Logo className="w-48" />
            </Link>
          ) : lang == "en" ? (
            <Link
              to="/en"
              className="h-[100%] flex cursor-pointer mx-auto md:mx-0"
            >
              <Logo className="w-48" />
            </Link>
          ) : null}

          <nav className="md:flex gap-3 hidden">
            {lang == "es" ? (
              <>
                <NavLink to="/es" className="links">
                  Inicio
                </NavLink>
                <span>|</span>
                <NavLink to="es/acerca-de-maca" className="links">
                  Acerca de MACA
                </NavLink>
                <span>|</span>
                <NavLink to="es/contacto" className="links">
                  Contacto
                </NavLink>
                <span>|</span>
                <NavLink to="es/preguntas-frecuentes" className="links">
                  Preguntas Frecuentes
                </NavLink>
              </>
            ) : (
              <>
                <Link to="/en" className="links">
                  Home
                </Link>
                <span>|</span>
                <Link to="/en/about" className="links">
                  About MACA
                </Link>
                <span>|</span>
                <Link to="/en/contact" className="links">
                  Contact
                </Link>
                <span>|</span>
                <Link to="/en/faq" className="links">
                  Frequent questions
                </Link>
              </>
            )}
          </nav>
        </div>

        <div
          className={
            !nav
              ? "absolute flex justify-between top-16 h-screen w-full left-0 bg-[rgb(150,150,150)] transition-all duration-150 ease-in-out"
              : "absolute flex justify-between top-16 h-screen w-full left-[-100%] bg-[rgb(150,150,150)] transition-all duration-150 ease-in-out"
          }
        >
          <nav className="flex flex-col gap-y-4 w-[70%] h-full bg-[rgb(180,180,180)]">
            <Link
              to="/"
              className="bg-white/20 text-magentaMaca boldFont text-xl p-4 mb-1"
              onClick={() => {
                setNav(!nav);
              }}
            >
              Inicio
            </Link>
            <Link
              to="/acerca-de-maca"
              className="bg-white/20 text-magentaMaca boldFont text-xl p-4 my-1"
              onClick={() => {
                setNav(!nav);
              }}
            >
              Acerca de MACA
            </Link>
            <Link
              to="/contacto"
              className="bg-white/20 text-magentaMaca boldFont text-xl p-4 my-1"
              onClick={() => {
                setNav(!nav);
              }}
            >
              Contacto
            </Link>{" "}
            <Link
              to="/preguntas-frecuentes"
              className="bg-white/20 text-magentaMaca boldFont text-xl p-4 my-1"
              onClick={() => {
                setNav(!nav);
              }}
            >
              Preguntas Frecuentes
            </Link>
          </nav>
          <box-icon
            type="solid"
            name="x-square"
            size="md"
            color="rgb(150, 45, 72)"
            onClick={() => {
              setNav(!nav);
            }}
          ></box-icon>
        </div>
      </div>
    </>
  );
};

export default Header;
