import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Logo from "../assets/Logo";
import { useEffect, useState } from "react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-8 w-8 transition-transform mb-2 p-1`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="rgb(233, 75, 115)"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
const PreguntasFrecuentes = () => {
  useEffect(() => {
    document.title = "Preguntas Frecuentes";
  }, []);
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <div className="container mx-auto flex items-center md:p-24 flex-col px-6 py-12">
        <Logo className="text-center mb-24 w-[65%] xl:w-[45%]" />
        <h2 className="text-center bg-magentaMaca rounded-full inline-block px-8 pt-5 pb-3 text-white text-4xl boldFont">
          Preguntas Frecuentes
        </h2>
      </div>
      <section className="container px-6 py-8 mx-auto xl:py-24 xl:px-64 regularFont">
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} />}
          className="border border-blue-gray-100 px-4 rounded-lg mb-3 py-3 text-slate-600"
        >
          <AccordionHeader onClick={() => handleOpen(1)} className="boldFont">
            Pregunta Frecuente
          </AccordionHeader>

          <AccordionBody>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              non velit voluptatum fuga veritatis. Quasi temporibus, laborum
              labore quos soluta, id officia obcaecati numquam nemo recusandae
              eveniet? Quasi, temporibus nesciunt!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              corrupti assumenda nostrum, quam dignissimos aliquid harum
              exercitationem. Aliquam doloribus nostrum quo saepe odit, vel
              culpa iusto accusamus assumenda suscipit dicta!
            </p>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={<Icon id={2} open={open} />}
          className="border border-blue-gray-100 px-4 rounded-lg mb-3 py-3 text-slate-600"
        >
          <AccordionHeader onClick={() => handleOpen(2)} className="boldFont">
            Pregunta Frecuente
          </AccordionHeader>

          <AccordionBody>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              non velit voluptatum fuga veritatis. Quasi temporibus, laborum
              labore quos soluta, id officia obcaecati numquam nemo recusandae
              eveniet? Quasi, temporibus nesciunt!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              corrupti assumenda nostrum, quam dignissimos aliquid harum
              exercitationem. Aliquam doloribus nostrum quo saepe odit, vel
              culpa iusto accusamus assumenda suscipit dicta!
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          icon={<Icon id={3} open={open} />}
          className="border border-blue-gray-100 px-4 rounded-lg mb-3 py-3 text-slate-600"
        >
          <AccordionHeader onClick={() => handleOpen(3)} className="boldFont">
            Pregunta Frecuente
          </AccordionHeader>

          <AccordionBody>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              non velit voluptatum fuga veritatis. Quasi temporibus, laborum
              labore quos soluta, id officia obcaecati numquam nemo recusandae
              eveniet? Quasi, temporibus nesciunt!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              corrupti assumenda nostrum, quam dignissimos aliquid harum
              exercitationem. Aliquam doloribus nostrum quo saepe odit, vel
              culpa iusto accusamus assumenda suscipit dicta!
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 4}
          icon={<Icon id={4} open={open} />}
          className="border border-blue-gray-100 px-4 rounded-lg mb-3 py-3 text-slate-600"
        >
          <AccordionHeader onClick={() => handleOpen(4)} className="boldFont">
            Pregunta Frecuente
          </AccordionHeader>

          <AccordionBody>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              non velit voluptatum fuga veritatis. Quasi temporibus, laborum
              labore quos soluta, id officia obcaecati numquam nemo recusandae
              eveniet? Quasi, temporibus nesciunt!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              corrupti assumenda nostrum, quam dignissimos aliquid harum
              exercitationem. Aliquam doloribus nostrum quo saepe odit, vel
              culpa iusto accusamus assumenda suscipit dicta!
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 5}
          icon={<Icon id={5} open={open} />}
          className="border border-blue-gray-100 px-4 rounded-lg mb-3 py-3 text-slate-600"
        >
          <AccordionHeader onClick={() => handleOpen(5)} className="boldFont">
            Pregunta Frecuente
          </AccordionHeader>

          <AccordionBody>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              non velit voluptatum fuga veritatis. Quasi temporibus, laborum
              labore quos soluta, id officia obcaecati numquam nemo recusandae
              eveniet? Quasi, temporibus nesciunt!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              corrupti assumenda nostrum, quam dignissimos aliquid harum
              exercitationem. Aliquam doloribus nostrum quo saepe odit, vel
              culpa iusto accusamus assumenda suscipit dicta!
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 6}
          icon={<Icon id={6} open={open} />}
          className="border border-blue-gray-100 px-4 rounded-lg mb-3 py-3 text-slate-600"
        >
          <AccordionHeader onClick={() => handleOpen(6)} className="boldFont">
            Pregunta Frecuente
          </AccordionHeader>

          <AccordionBody>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              non velit voluptatum fuga veritatis. Quasi temporibus, laborum
              labore quos soluta, id officia obcaecati numquam nemo recusandae
              eveniet? Quasi, temporibus nesciunt!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              corrupti assumenda nostrum, quam dignissimos aliquid harum
              exercitationem. Aliquam doloribus nostrum quo saepe odit, vel
              culpa iusto accusamus assumenda suscipit dicta!
            </p>
          </AccordionBody>
        </Accordion>
      </section>
    </>
  );
};

export default PreguntasFrecuentes;
