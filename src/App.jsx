import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import FilaPage from "./pages/FilaPage.jsx";
import NovoChamadoPage from "./pages/NovoChamadoPage.jsx";
import SobrePage from "./pages/SobrePage.jsx";
import NaoEncontradaPage from "./pages/NaoEncontradaPage.jsx";

// O App monta o menu e decide qual página mostrar conforme a URL.
// Os chamados e as ações ficam no ChamadosProvider.
export default function App() {
  return (
    <>
      <header className="app-header">
        <strong>ITEAM · Suporte</strong>
        <nav>
          <NavLink to="/" end>
            Fila
          </NavLink>
          <NavLink to="/novo">Novo chamado</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>
      </header>

      <main className="app">
        <header className="hero">
          <p className="eyebrow">ITEAM · SUPORTE</p>
          <h1>Fila de Atendimento</h1>
          <p>Organize os chamados recebidos pelos setores.</p>
        </header>

        <Routes>
          <Route path="/" element={<FilaPage />} />
          <Route path="/novo" element={<NovoChamadoPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="*" element={<NaoEncontradaPage />} />
        </Routes>
      </main>
    </>
  );
}
