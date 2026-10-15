import "./App.css";
import Panel from "./components/Panel.jsx";
import ChamadoList from "./components/ChamadoList.jsx";
import { initialTickets } from "./data/chamados.js";

export default function App() {
  const total = initialTickets.length;
  const resolvidos = initialTickets.filter((chamado) => chamado.resolved).length;

  // Recebe o id vindo do cartão clicado.
  function alternarSituacao(id) {
    console.log("Chamado clicado:", id);
  }

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

      <Panel title="Chamados">
        <ChamadoList chamados={initialTickets} onAlternar={alternarSituacao} />
      </Panel>
    </main>
  );
}
