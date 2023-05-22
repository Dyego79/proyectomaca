import "boxicons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  return (
    <footer className="bg-magentaMaca text-white md:p-24 px-4 py-12">
      <div className="container mx-auto flex gap-y-5 flex-col md:flex-row md:gap-x-12">
        <div className="md:w-1/3 flex flex-col">
          <h3 className="boldFont text-3xl mb-3">Conócenos</h3>
          <Link to="/acerca-de-maca" className="regularFont text-2xl mb-1">
            Acerca de MACA
          </Link>
          <Link to="/como-funciona" className="regularFont text-2xl mb-1">
            Cómo funciona MACA
          </Link>
        </div>
        <div className="md:w-1/3">
          <h3 className="boldFont text-3xl mb-3">Contáctenos</h3>
        </div>
        <div className="md:w-1/3">
          <h3 className="boldFont text-3xl mb-3">Infórmate</h3>
          <Link
            to="terminos-y-condiciones"
            className="regularFont text-2xl mb-1"
          >
            Términos y Condiciones
          </Link>
          <div className="flex flex-row md:gap-x-3 mt-3">
            <a href="#">
              <box-icon
                type="logo"
                name="youtube"
                color="white"
                size="lg"
              ></box-icon>
            </a>
            <a href="#">
              <box-icon
                type="logo"
                name="instagram"
                color="white"
                size="lg"
              ></box-icon>
            </a>
            <a href="#">
              <box-icon
                type="logo"
                name="facebook-square"
                color="white"
                size="lg"
              ></box-icon>
            </a>
            <a href="#">
              <box-icon
                type="logo"
                name="whatsapp"
                color="white"
                size="lg"
              ></box-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
