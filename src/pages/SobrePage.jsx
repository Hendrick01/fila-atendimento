import Panel from "../components/Panel.jsx";

// Página "/sobre": informações do projeto.
export default function SobrePage() {
  return (
    <Panel title="Fila de Atendimento">
      <p className="summary">
        Aplicação para o setor de suporte acompanhar chamados simples: assunto,
        setor solicitante e situação (Aberto ou Resolvido). Os dados ficam
        salvos no navegador e continuam disponíveis após recarregar a página.
      </p>
      <p className="summary">
        Atividade integradora do Módulo 04 (Desenvolvimento Front-end com React)
        do ITEAM, feita por Hendrick Silva Ferreira.
      </p>
    </Panel>
  );
}
