import Panel from "../components/Panel.jsx";
import ChamadoForm from "../components/ChamadoForm.jsx";

// Página "/novo": formulário de cadastro.
export default function NovoChamadoPage() {
  return (
    <Panel title="Cadastre um chamado">
      <ChamadoForm />
    </Panel>
  );
}
