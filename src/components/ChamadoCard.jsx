// Exibe um único chamado. Recebe os dados por props e não os altera.
export default function ChamadoCard({ chamado }) {
  const { title, sector, resolved } = chamado;

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
      </div>
    </article>
  );
}
