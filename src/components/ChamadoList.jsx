import ChamadoCard from "./ChamadoCard.jsx";

// Recebe o array de chamados e gera um cartão para cada item.
// A função onAlternar vem do App e é repassada a cada cartão.
export default function ChamadoList({ chamados, onAlternar }) {
  if (chamados.length === 0) {
    return <p className="summary">Nenhum chamado cadastrado.</p>;
  }

  return (
    <div className="ticket-list">
      {chamados.map((chamado) => (
        <ChamadoCard key={chamado.id} chamado={chamado} onAlternar={onAlternar} />
      ))}
    </div>
  );
}
