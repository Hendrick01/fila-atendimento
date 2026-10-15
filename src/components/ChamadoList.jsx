import ChamadoCard from "./ChamadoCard.jsx";

// Recebe o array de chamados e gera um cartão para cada item.
// As funções onAlternar e onExcluir vêm do App e são repassadas a cada cartão.
export default function ChamadoList({ chamados, onAlternar, onExcluir }) {
  if (chamados.length === 0) {
    return <p className="summary">Nenhum chamado cadastrado.</p>;
  }

  return (
    <div className="ticket-list">
      {chamados.map((chamado) => (
        <ChamadoCard
          key={chamado.id}
          chamado={chamado}
          onAlternar={onAlternar}
          onExcluir={onExcluir}
        />
      ))}
    </div>
  );
}
