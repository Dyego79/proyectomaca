import Logo from "../assets/Logo";
import { useEffect } from "react";
const Contacto = () => {
  useEffect(() => {
    document.title = "Contacto MACA";
  }, []);
  return (
    <>
      <div className="container mx-auto flex items-center md:p-24 flex-col px-6 py-12">
        <Logo className="text-center mb-24 w-[65%] xl:w-[45%]" />
        <h2 className="text-center bg-magentaMaca rounded-full inline-block px-8 pt-5 pb-3 text-white text-4xl boldFont">
          Contactanos
        </h2>
      </div>
      <div className="regularFont text-2xl text-slate-700 container mx-auto md:px-40  md:py-6 mb-8 flex-col px-6 py-6 text-center md:text-left">
        <h3>Email</h3>
        <a href="mailto:info@maca.com">info@maca.com</a>
      </div>
      <div className="regularFont text-2xl text-slate-700 container mx-auto md:px-40  md:py-6 flex-col px-6 pb-12 text-center md:text-left md:mb-32">
        <h3>Teléfono</h3>
        <a href="tel:543013967687">+54-301-3967687</a>
      </div>
      <section className="hidden w-full md:h-[40vh] relative overflow-hidden md:flex justify-center content-center">
        <img
          src="/img/pexels-samson-katt-5256087.jpg"
          className="w-[150%] h-auto absolute -translate-y-36"
        />
      </section>
      <div className="w-full text-center pb-8">
        <h2 className="md:hidden text-center bg-magentaMaca rounded-full inline-block px-5 pt-3 pb-1 text-white text-2xl boldFont">
          Nuestras redes sociales
        </h2>
      </div>
      <div className="flex justify-center py-4">
        <a href="#">
          <box-icon
            type="logo"
            name="youtube"
            color="rgba(233, 75, 115, 1)"
            size="lg"
          ></box-icon>
        </a>
        <a href="#">
          <box-icon
            type="logo"
            name="instagram"
            color="rgba(233, 75, 115, 1)"
            size="lg"
          ></box-icon>
        </a>
        <a href="#">
          <box-icon
            type="logo"
            name="facebook-square"
            color="rgba(233, 75, 115, 1)"
            size="lg"
          ></box-icon>
        </a>
        <a href="#">
          <box-icon
            type="logo"
            name="whatsapp"
            color="rgba(233, 75, 115, 1)"
            size="lg"
          ></box-icon>
        </a>
      </div>
    </>
  );
};

export default Contacto;
