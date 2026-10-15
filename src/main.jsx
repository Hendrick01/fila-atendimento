import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChamadosProvider } from "./context/ChamadosContext.jsx";
import "./index.css";

// O Provider envolve o App no ponto de entrada:
// todos os componentes abaixo dele podem ler os chamados.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChamadosProvider>
      <App />
    </ChamadosProvider>
  </React.StrictMode>,
);
