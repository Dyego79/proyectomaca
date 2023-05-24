import "boxicons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useMain from "../useMain";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const [url, setUrl] = useState("");
  const location = useLocation();
  useEffect(() => {
    console.log("Effect: ", location.pathname);
    console.log("Effect: URL:", url);
    setUrl(location.pathname);
  }, [location.pathname]);
  const { lang, handelEs, handelEn } = useMain();
  const Footerterminos = () => {
    return (
      <div className="flex justify-center items-center px-5 py-40 w-full bg-magentaMaca text-white text-3xl md:text-4xl boldFont">
        <h2 className="text-center">
          Gracias por usar Maca <br />
          ¡Esperamos que disfrutes de nuestra plataforma!
        </h2>
      </div>
    );
  };
  const Footerterms = () => {
    return (
      <div className="flex justify-center items-center px-5 py-40 w-full bg-magentaMaca text-white text-3xl md:text-4xl boldFont">
        <h2 className="text-center">
          Thank you for using Maca <br />
          We hope you enjoy our platform!
        </h2>
      </div>
    );
  };
  const FooterES = () => {
    return (
      <>
        {location.pathname != "/es/terminos-y-condiciones" ? (
          <footer
            className={
              location.pathname == "/es/acerca-de-maca" ||
              location.pathname == "/es/preguntas-frecuentes" ||
              location.pathname == "/es/contacto"
                ? "bg-slate-200 text-slate-600 md:p-24 px-4 py-12"
                : "bg-magentaMaca text-white md:p-24 px-4 py-12"
            }
          >
            <div className="container mx-auto flex gap-y-5 flex-col md:flex-row md:gap-x-12">
              <div className="md:w-1/3 flex flex-col">
                <h3 className="boldFont text-3xl mb-3">Conócenos</h3>
                <Link
                  to="es/acerca-de-maca"
                  className="regularFont text-2xl mb-1"
                >
                  Acerca de MACA
                </Link>
                <a href="#" className="regularFont text-2xl mb-1">
                  Cómo funciona MACA
                </a>
              </div>
              <div className="md:w-1/3">
                <h3 className="boldFont text-3xl mb-3">Contáctenos</h3>
              </div>
              <div className="md:w-1/3">
                <h3 className="boldFont text-3xl mb-3">Infórmate</h3>
                <Link
                  to="es/terminos-y-condiciones"
                  className="regularFont text-2xl mb-1"
                >
                  Términos y Condiciones
                </Link>
                <div className="flex flex-row md:gap-x-3 mt-3">
                  <a href="#">
                    <box-icon
                      type="logo"
                      name="youtube"
                      color={
                        location.pathname == "/es/acerca-de-maca" ||
                        location.pathname == "/es/preguntas-frecuentes" ||
                        location.pathname == "/es/contacto"
                          ? "rgb(80,80,90)"
                          : "white"
                      }
                      size="lg"
                    ></box-icon>
                  </a>
                  <a href="#">
                    <box-icon
                      type="logo"
                      name="instagram"
                      color={
                        location.pathname == "/es/acerca-de-maca" ||
                        location.pathname == "/es/preguntas-frecuentes" ||
                        location.pathname == "/es/contacto"
                          ? "rgb(80,80,90)"
                          : "white"
                      }
                      size="lg"
                    ></box-icon>
                  </a>
                  <a href="#">
                    <box-icon
                      type="logo"
                      name="facebook-square"
                      color={
                        location.pathname == "/es/acerca-de-maca" ||
                        location.pathname == "/es/preguntas-frecuentes" ||
                        location.pathname == "/es/contacto"
                          ? "rgb(80,80,90)"
                          : "white"
                      }
                      size="lg"
                    ></box-icon>
                  </a>
                  <a href="#">
                    <box-icon
                      type="logo"
                      name="whatsapp"
                      color={
                        location.pathname == "/es/acerca-de-maca" ||
                        location.pathname == "/es/preguntas-frecuentes" ||
                        location.pathname == "/es/contacto"
                          ? "rgb(80,80,90)"
                          : "white"
                      }
                      size="lg"
                    ></box-icon>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        ) : (
          <Footerterminos />
        )}
      </>
    );
  };
  const FooterENG = () => {
    return (
      <>
        {location.pathname != "/en/terms" ? (
          <footer
            className={
              location.pathname == "/en/about" ||
              location.pathname == "/en/faq" ||
              location.pathname == "/en/contact"
                ? "bg-slate-200 text-slate-600 md:p-24 px-4 py-12"
                : "bg-magentaMaca text-white md:p-24 px-4 py-12"
            }
          >
            <div className="container mx-auto flex gap-y-5 flex-col md:flex-row md:gap-x-12">
              <div className="md:w-1/3 flex flex-col">
                <h3 className="boldFont text-3xl mb-3">About Us</h3>
                <Link
                  to="es/acerca-de-maca"
                  className="regularFont text-2xl mb-1"
                >
                  About MACA
                </Link>
                <a href="#" className="regularFont text-2xl mb-1">
                  How does MACA work?
                </a>
              </div>
              <div className="md:w-1/3">
                <h3 className="boldFont text-3xl mb-3">Contact us</h3>
                <Link to="en/contact" className="regularFont text-2xl mb-1">
                  Contact
                </Link>
              </div>
              <div className="md:w-1/3">
                <h3 className="boldFont text-3xl mb-3">Be aware</h3>
                <Link to="en/terms" className="regularFont text-2xl mb-1">
                  Terms and conditions
                </Link>
                <div className="flex flex-row md:gap-x-3 mt-3">
                  <a href="#">
                    <box-icon
                      type="logo"
                      name="youtube"
                      color={
                        location.pathname == "/en/about" ||
                        location.pathname == "/en/faq" ||
                        location.pathname == "/en/contact"
                          ? "rgb(80,80,90)"
                          : "white"
                      }
                      size="lg"
                    ></box-icon>
                  </a>
                  <a href="#">
                    <box-icon
                      type="logo"
                      name="instagram"
                      color={
                        location.pathname == "/en/about" ||
                        location.pathname == "/en/faq" ||
                        location.pathname == "/en/contact"
                          ? "rgb(80,80,90)"
                          : "white"
                      }
                      size="lg"
                    ></box-icon>
                  </a>
                  <a href="#">
                    <box-icon
                      type="logo"
                      name="facebook-square"
                      color={
                        location.pathname == "/en/about" ||
                        location.pathname == "/en/faq" ||
                        location.pathname == "/en/contact"
                          ? "rgb(80,80,90)"
                          : "white"
                      }
                      size="lg"
                    ></box-icon>
                  </a>
                  <a href="#">
                    <box-icon
                      type="logo"
                      name="whatsapp"
                      color={
                        location.pathname == "/en/about" ||
                        location.pathname == "/en/faq" ||
                        location.pathname == "/en/contact"
                          ? "rgb(80,80,90)"
                          : "white"
                      }
                      size="lg"
                    ></box-icon>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        ) : (
          <Footerterms />
        )}
      </>
    );
  };
  return (
    <>
      {lang == "es" ? (
        <FooterES />
      ) : lang == "en" ? (
        <FooterENG />
      ) : lang == "en" ? (
        <Footer2 />
      ) : null}
    </>
  );
};

export default Footer;
