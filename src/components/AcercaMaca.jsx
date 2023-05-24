import Logo from "../assets/Logo";
import { useEffect, useState } from "react";
import Footer from "./Footer";
const AcercaMaca = () => {
  useEffect(() => {
    document.title = "Acerca de MACA";
  }, []);
  return (
    <>
      <div className="container mx-auto flex items-center md:p-24 flex-col px-6 py-12">
        <Logo className="text-center mb-24 w-[65%] xl:w-[45%]" />
        <h2 className="text-center bg-magentaMaca rounded-full inline-block px-8 pt-5 pb-3 text-white text-4xl boldFont">
          ¿QUE ES MACA?
        </h2>
      </div>
      <section className="container mx-auto pt-16 pb-28 regularFont text-xl px-5 xl:px-24">
        <p className=" text-slate-900">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h3 className="mt-12 mb-5 text-4xl text-magentaMaca boldFont">
          {" "}
          Visión
        </h3>
        <p className="text-slate-900">
          Crear un espacio seguro y acogedor para que los amos de mascotas
          puedan disfrutar de sus viajes y ocupaciones al tiempo que nos
          ocupamos del bienestar de sus mascotas. Ofrecemos alojamiento
          calificado por otros usuarios que garantiza la calidad del cuidado de
          los perros y gatos que se alojan con nuestros anfitriones.
        </p>{" "}
        <h3 className="mt-12 mb-5 text-4xl text-magentaMaca boldFont">
          {" "}
          Objetivo
        </h3>
        <p className="text-slate-900">
          Nuestro objetivo es ser la opción número uno de alojamientos para
          perritos y gaticos. Buscamos ofrecer un servicio excepcional que haga
          que su experiencia con nosotros sea lo más agradable posible.
        </p>
      </section>
      <section className="w-full md:h-[60vh] relative overflow-hidden flex justify-center content-center">
        <img
          src="\img\pexels-anna-tarazevich-14751278.jpg"
          className="w-[150%] h-auto absolute -translate-y-36"
        />
      </section>
    </>
  );
};

export default AcercaMaca;
