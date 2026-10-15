// Exibe um único chamado. Recebe os dados por props e não os altera.
// Os cliques nos botões apenas avisam quem renderizou o cartão (ChamadoList),
// chamando as funções recebidas por props com o id.
export default function ChamadoCard({ chamado, onAlternar, onExcluir }) {
  const { id, title, sector, resolved } = chamado;

  return (
    <article className="ticket-card">
      <div>
        <h3>{title}</h3>
        <p>Setor: {sector}</p>
      </div>

      <div className="ticket-actions">
        <span className={resolved ? "badge badge-done" : "badge badge-open"}>
          {resolved ? "Resolvido" : "Aberto"}
        </span>
        <button type="button" onClick={() => onAlternar(id)}>
          {resolved ? "Reabrir" : "Resolver"}
        </button>
        <button type="button" className="secondary" onClick={() => onExcluir(id)}>
          Excluir
        </button>
      </div>
    </article>
  );
}
