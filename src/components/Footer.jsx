import "boxicons";

const Footer = () => {
  return (
    <footer className=" bg-magentaMaca text-white py-24">
      <div className="container px-4 mx-auto flex gap-y-5 flex-col md:flex-row md:gap-x-12">
        <div className="w-1/2 flex flex-col">
          <h3 className="boldFont text-3xl mb-3">Conócenos</h3>
          <a href="#" className="regularFont text-2xl mb-1">
            Acerca de MACA
          </a>
          <a href="#" className="regularFont text-2xl mb-1">
            Cómo funciona MACA
          </a>
        </div>
        <div className="w-1/2">
          <h3 className="boldFont text-3xl mb-3">Contáctenos</h3>
        </div>
        <div className="w-1/2">
          <h3 className="boldFont text-3xl mb-3">Infórmate</h3>
          <a href="#" className="regularFont text-2xl mb-1">
            Términos y Condiciones
          </a>
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
