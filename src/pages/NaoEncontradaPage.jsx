import { Link } from "react-router";
import Panel from "../components/Panel.jsx";

// Página exibida para qualquer endereço que não corresponda a uma rota.
export default function NaoEncontradaPage() {
  return (
    <Panel title="404">
      <p className="summary">Página não encontrada</p>
      <p>
        <Link to="/">Voltar à fila</Link>
      </p>
    </Panel>
  );
}
