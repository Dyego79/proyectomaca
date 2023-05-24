import { createContext, useState } from "react";
//import { location } from "react-router-dom";
const AppContext = createContext();
/* location.pathname == "/es/acerca-de-maca" ||
      location.pathname == "/es/preguntas-frecuentes" ||
      location.pathname == "/es/contacto"
      ? "es"
      : "en" */
const Providercontext = ({ children }) => {
  const [lang, setLang] = useState(
    location.pathname == "/es" ||
      location.pathname == "/es/acerca-de-maca" ||
      location.pathname == "/es/preguntas-frecuentes" ||
      location.pathname == "/es/contacto"
      ? "es"
      : "en"
  );

  const handelEs = () => {
    setLang("es");
  };
  const handelEn = () => {
    setLang("en");
  };
  return (
    <AppContext.Provider value={{ lang, setLang, handelEs, handelEn }}>
      {children}
    </AppContext.Provider>
  );
};
export { Providercontext };

export default AppContext;
