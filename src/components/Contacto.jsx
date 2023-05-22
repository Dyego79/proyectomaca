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
      <div className="regularFont text-xl text-slate-700 container mx-auto md:px-40  md:py-6 mb-8 flex-col px-6 py-12 text-left">
        <h3>Email</h3>
        <a href="mailto:info@maca.com">info@maca.com</a>
      </div>
      <div className="regularFont text-xl text-slate-700 container mx-auto md:px-40  md:py-6 mb-8 flex-col px-6 py-12 text-left">
        <h3>Teléfono</h3>
        <a href="tel:543013967687">+54-301-3967687</a>
      </div>
    </>
  );
};

export default Contacto;
