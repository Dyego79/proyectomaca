import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Inicio />
    </>
  );
}

export default App;
