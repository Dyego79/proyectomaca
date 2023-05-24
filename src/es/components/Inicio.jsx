import Logoanfitrion from "../assets/Logoanfitrion";
import Logohogartemporal from "../assets/Logohogartemporal";
import Slides from "./Slides";

const Inicio = () => {
  return (
    <>
      <section className="bg-slate-400 w-full sm:h-[78vh]  h-[55vh] hero flex items-center relative px-4">
        <div className="container mx-auto flex flex-col items-start sm:px-5">
          <a
            href="https://wa.me/543013967687"
            className="md:hidden right-5 top-5 absolute w-48"
          >
            <img src="/img/escribinosWP.png" alt="" />
          </a>
          <h2 className="md:hidden boldFont text-5xl text-white drop-shadow-[5px_5px_5px_rgba(0,0,0,0.8)]">
            ¡Mascotas felices en casas felices!
          </h2>
          <h2 className="hidden md:block boldFont text-8xl text-white drop-shadow-[5px_5px_5px_rgba(0,0,0,0.8)]">
            ¡Mascotas felices <br />
            en casas felices!
          </h2>
          <a
            href="#servicios"
            className="bg-magentaMaca text-white text-4xl md:block rounded-full border-4 border-transparent px-6 pb-1 pt-4 mt-8 btn-conoce cursor-pointer hover:border-red-300 hidden"
          >
            Conocé nuestros servicios.
          </a>
        </div>
      </section>
      <main id="servicios" className="bg-slate-300 px-5 relative py-12">
        <div className="sm:pt-16 sm:absolute md:mt-20 sm:w-[98%] serviciosContainer">
          <h2 className="h2-servicios text-center">Nuestros Servicios</h2>
        </div>
        <div className="flex flex-col gap-y-20 md:flex-row sm:py-16 h-full">
          <div className="flex flex-col items-center gap-y-8 md:w-1/2">
            <div className="h-60 w-60 rounded-full sm:bg-white flex justify-center items-center">
              <Logoanfitrion />
            </div>
            <h3 className="h3-servicios">
              ¡Conviértete en <span>anfitrión</span> para mascotas!
            </h3>
            <button className=" bg-magentaMaca rounded-full px-8 pt-2 btn-servicios">
              Haz Click
            </button>
          </div>

          <div className="flex flex-col items-center gap-y-8 md:w-1/2">
            <div className="h-60 w-60 rounded-full sm:bg-white flex justify-center items-center">
              <Logohogartemporal />
            </div>
            <h3 className="h3-servicios">
              Busca un <span>hogar temporal</span> para tu mascota
            </h3>
            <button className=" bg-magentaMaca rounded-full px-8 pt-2 btn-servicios">
              ¡Muy Pronto!
            </button>
          </div>
        </div>
      </main>
      <div className="slides md:px-6 pt-16 xl:px-40 sm:bg-white">
        <div className="text-center historias px-2">
          <h2 className="text-3xl">Historias de usuarios felices.</h2>
        </div>
        <div className="pt-12">
          <Slides />
        </div>
      </div>
      <section className="bg-slate-300 py-16">
        <section className="flex justify-center flex-col md:flex-row md:gap-x-16 container mx-auto text-center">
          <div className="flex flex-col items-center gap-y-3 md:1/3">
            <img src="/img/Icongift.png" className="h-32" />
            <h2 className="boldFont text-3xl mt-5">Promos y descuentos</h2>
            <p className="regularFont text-2xl text-slate-600">
              10% de descuento <br />
              reservando alojamiento por
              <br /> mas de una semana de
              <br />
              corrido o, mas de 30 días en <br />
              un período de 3 meses.
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-3 md:1/3">
            <img src="/img/IconFidelizacion.png" className="h-32" />
            <h2 className="boldFont text-3xl mt-5">Fidelización</h2>
            <p className="regularFont text-2xl text-slate-600">
              1 Noche gratis después de cada
              <br />
              50 reservas.
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-3 md:1/3">
            <img src="/img/IconReferidos.png" className="h-32" />
            <h2 className="boldFont text-3xl mt-5">Programa de referidos</h2>
            <p className="regularFont text-2xl text-slate-600">
              Invita a un amigo y<br /> ambos obtendrán un <br />
              10% de descuento
              <br />
              en su próxima reserva.-
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Inicio;
