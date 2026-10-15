import { useState } from "react";
import "./App.css";
import Panel from "./components/Panel.jsx";
import ChamadoList from "./components/ChamadoList.jsx";
import ChamadoForm from "./components/ChamadoForm.jsx";
import { initialTickets } from "./data/chamados.js";

export default function App() {
  const [chamados, setChamados] = useState(initialTickets);

  // Valores derivados do array: recalculados a cada renderização, sem estado extra.
  const total = chamados.length;
  const resolvidos = chamados.filter((chamado) => chamado.resolved).length;

  // Cria um novo array; só o chamado com o id clicado ganha um novo objeto.
  function alternarSituacao(id) {
    setChamados((atuais) =>
      atuais.map((chamado) =>
        chamado.id === id ? { ...chamado, resolved: !chamado.resolved } : chamado,
      ),
    );
  }

  // Cria um novo array sem o chamado escolhido.
  function excluirChamado(id) {
    setChamados((atuais) => atuais.filter((chamado) => chamado.id !== id));
  }

  // Recebe dados já validados pelo formulário e adiciona um novo chamado aberto.
  function cadastrarChamado(assunto, setor) {
    const novoChamado = {
      id: `chamado-${Date.now()}`,
      title: assunto,
      sector: setor,
      resolved: false,
    };
    setChamados((atuais) => [...atuais, novoChamado]);
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

      <Panel title="Novo chamado">
        <ChamadoForm onCadastrar={cadastrarChamado} />
      </Panel>

      <Panel title="Chamados">
        <ChamadoList
          chamados={chamados}
          onAlternar={alternarSituacao}
          onExcluir={excluirChamado}
        />
      </Panel>
    </main>
  );
}
