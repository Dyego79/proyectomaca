import Logo from "../assets/Logo";
import { useEffect, useState } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About MACA";
  }, []);
  return (
    <>
      <div className="container mx-auto flex items-center md:p-24 flex-col px-6 py-12">
        <Logo className="text-center mb-24 w-[65%] xl:w-[45%]" />
        <h2 className="text-center bg-magentaMaca rounded-full inline-block px-8 pt-5 pb-3 text-white text-4xl boldFont">
          ¿WHAT IS MACA?
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
          Vision
        </h3>
        <p className="text-slate-900">
          Create a safe and welcoming space for pet owners so they can enjoy
          their travels and occupations while we take care of the welfare of
          your pets. We offer accommodation rated by other users that guarantees
          the quality of care for the dogs and cats that stay with our hosts.
        </p>{" "}
        <h3 className="mt-12 mb-5 text-4xl text-magentaMaca boldFont">
          {" "}
          Objective
        </h3>
        <p className="text-slate-900">
          Our goal is to be the number one accommodation option for puppies and
          kittens. We seek to offer exceptional service that makes your
          experience with us as pleasant as possible.
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

export default About;
