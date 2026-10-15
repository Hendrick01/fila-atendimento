import ChamadoCard from "./ChamadoCard.jsx";

// Recebe o array de chamados e gera um cartão para cada item.
export default function ChamadoList({ chamados }) {
  if (chamados.length === 0) {
    return <p className="summary">Nenhum chamado cadastrado.</p>;
  }

  return (
    <div className="ticket-list">
      {chamados.map((chamado) => (
        <ChamadoCard key={chamado.id} chamado={chamado} />
      ))}
    </div>
  );
}
