import { useContext } from "react";
import "./App.css";
import Panel from "./components/Panel.jsx";
import ChamadoList from "./components/ChamadoList.jsx";
import ChamadoForm from "./components/ChamadoForm.jsx";
import { ChamadosContext } from "./context/ChamadosContext.jsx";

// O App só monta a página. Os chamados e as ações ficam no ChamadosProvider.
export default function App() {
  const contexto = useContext(ChamadosContext);
  if (contexto === null) {
    throw new Error("App precisa estar dentro de <ChamadosProvider>.");
  }

  const { total, resolvidos } = contexto;

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">ITEAM · SUPORTE</p>
        <h1>Fila de Atendimento</h1>
        <p>Organize os chamados recebidos pelos setores.</p>
      </header>

      <Panel title="Resumo">
        <p className="summary">
          {resolvidos} de {total} chamados resolvidos
        </p>
      </Panel>

      <Panel title="Novo chamado">
        <ChamadoForm />
      </Panel>

      <Panel title="Chamados">
        <ChamadoList />
      </Panel>
    </main>
  );
}
