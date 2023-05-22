import Logo from "../assets/Logo";
const Terminos = () => {
  return (
    <>
      <div className="container mx-auto md:px-24 py-12 regularFont text-lg">
        <h3 className="text-center text-2xl text-slate-600 semiBold mb-9">
          Términos y condiciones de uso
        </h3>
        <p>
          Bienvenido/a a la plataforma Maca, el Airbnb para mascotas, perros y
          gatos. Antes de usar nuestra plataforma, por favor lee cuidadosamente
          estos términos y condiciones, ya que establecen los términos legales y
          condiciones de uso para tu acceso y uso de los servicios ofrecidos por
          Maca.
        </p>
        <p className="before:content-['1.'] before:text-slate-500 before:absolute before:-translate-x-5 mt-4 pl-5">
          Condiciones de uso: Al usar la plataforma Maca, aceptas cumplir con
          los términos y condiciones establecidos aquí. Si no estás de acuerdo
          con estos términos y condiciones, por favor no uses nuestra
          plataforma.
        </p>{" "}
        <p className="before:content-['2.'] before:text-slate-500 before:absolute before:-translate-x-5 mt-4 pl-5">
          Propiedad intelectual: Todos los contenidos y materiales de nuestra
          plataforma, incluyendo, pero no limitado a, textos, imágenes, videos,
          logos, nombres comerciales, marcas registradas y software, son
          propiedad exclusiva de Maca o de nuestros socios comerciales. Está
          prohibida la reproducción, distribución, modificación o cualquier otro
          uso de nuestros contenidos y materiales sin nuestro consentimiento
          previo y por escrito.
        </p>
        <p className="before:content-['3.'] before:text-slate-500 before:absolute before:-translate-x-5 mt-4 pl-5">
          Uso de la plataforma: Maca es una plataforma que conecta a
          propietarios de viviendas con huéspedes que deseen alojar a sus
          mascotas. Los propietarios de viviendas pueden inscribirse como
          anfitriones y los huéspedes pueden inscribir a sus mascotas para
          alojarlas en dichas viviendas. El uso de la plataforma se limita a
          estos fines, y cualquier otro uso está prohibido.
        </p>{" "}
        <p className="before:content-['4.'] before:text-slate-500 before:absolute before:-translate-x-5 mt-4 pl-5">
          Responsabilidad del usuario: Al usar la plataforma, el usuario es
          responsable de la información proporcionada y de cualquier actividad
          realizada a través de su cuenta. Además, los usuarios se comprometen a
          cumplir con todas las leyes aplicables y a no violar los derechos de
          terceros.
        </p>
        <p className="before:content-['5.'] before:text-slate-500 before:absolute before:-translate-x-5 mt-4 pl-5">
          Protección de datos: Maca recopila, utiliza y protege los datos
          personales de los usuarios de acuerdo con su Política de Privacidad.
          Al usar la plataforma, el usuario acepta la recopilación y uso de sus
          datos personales de acuerdo con esta política.
        </p>{" "}
        <p className="before:content-['6.'] before:text-slate-500 before:absolute before:-translate-x-5 mt-4 pl-5">
          Modificaciones a los términos y condiciones: Maca se reserva el
          derecho de modificar estos términos y condiciones en cualquier momento
          y sin previo aviso. Es responsabilidad del usuario revisar
          periódicamente estos términos y condiciones para estar al tanto de
          cualquier cambio.
        </p>
        <p className="before:content-['7.'] before:text-slate-500 before:absolute before:-translate-x-5 mt-4 pl-5">
          Ley aplicable: Estos términos y condiciones se rigen por las leyes del
          país de Maca y cualquier disputa relacionada con el uso de la
          plataforma se resolverá en los tribunales competentes en esa
          jurisdicción.
        </p>
      </div>
      ;
    </>
  );
};

export default Terminos;
