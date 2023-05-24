import { useContext } from "react";
import AppContext from "./context/ContextAPI";

const useMain = () => {
  return useContext(AppContext);
};

export default useMain;
