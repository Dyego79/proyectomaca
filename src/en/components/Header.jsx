import Logo from "../assets/Logo";
import Navbar from "./Navbar";
import Menulogo from "../assets/Menulogo";
import Backlogo from "../assets/Menulogo copy";
import NavbarMobile from "./NavbarMobile";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(true);
  return (
    <div className="bg-white/75 md:h-20 h-16 sticky top-0 backdrop-blur-lg flex items-center flex-row z-50">
      <div className="container mx-auto flex items-center justify-between">
        {nav ? (
          <Menulogo
            className="md:hidden ml-4 text-magentaMaca"
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

        <a
          href="/incio/"
          className="h-[100%] flex cursor-pointer mx-auto md:mx-0"
        >
          <Logo className="w-48" />
        </a>
        <Navbar />
      </div>

      <div
        className={
          !nav
            ? "absolute flex justify-between top-16 h-screen w-full left-0 bg-[rgb(150,150,150)] transition-all duration-150 ease-in-out"
            : "absolute flex justify-between top-16 h-screen w-full left-[-100%] bg-[rgb(150,150,150)] transition-all duration-150 ease-in-out"
        }
      >
        <nav className="flex flex-col gap-y-4 w-[70%] h-full bg-[rgb(180,180,180)]">
          <a
            href="#"
            className="bg-white/20 text-magentaMaca boldFont text-xl p-4 mb-1"
            onClick={() => {
              setNav(!nav);
            }}
          >
            Inicio
          </a>
          <a
            href="#"
            className="bg-white/20 text-magentaMaca boldFont text-xl p-4 my-1"
            onClick={() => {
              setNav(!nav);
            }}
          >
            Acerca de MACA
          </a>
          <a
            href="#"
            className="bg-white/20 text-magentaMaca boldFont text-xl p-4 my-1"
            onClick={() => {
              setNav(!nav);
            }}
          >
            Contacto
          </a>{" "}
          <a
            href="#"
            className="bg-white/20 text-magentaMaca boldFont text-xl p-4 my-1"
            onClick={() => {
              setNav(!nav);
            }}
          >
            Preguntas Frecuentes
          </a>
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
  );
};

export default Header;
