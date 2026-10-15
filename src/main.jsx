import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { ChamadosProvider } from "./context/ChamadosContext.jsx";
import "./index.css";

// No ponto de entrada:
// - BrowserRouter liga a aplicação à URL do navegador;
// - ChamadosProvider deixa os chamados disponíveis para todas as páginas.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChamadosProvider>
        <App />
      </ChamadosProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
