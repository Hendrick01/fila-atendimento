// Exibe um único chamado. Recebe os dados por props e não os altera.
// O clique no botão apenas avisa o App, chamando a função recebida com o id.
export default function ChamadoCard({ chamado, onAlternar }) {
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
      </div>
    </article>
  );
}
