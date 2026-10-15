import { useContext } from "react";
import Panel from "../components/Panel.jsx";
import ChamadoList from "../components/ChamadoList.jsx";
import { ChamadosContext } from "../context/ChamadosContext.jsx";

// Página "/": resumo com o contador e a lista de chamados.
export default function FilaPage() {
  const contexto = useContext(ChamadosContext);
  if (contexto === null) {
    throw new Error("FilaPage precisa estar dentro de <ChamadosProvider>.");
  }

  const { total, resolvidos } = contexto;

  return (
    <>
      <Panel title="Resumo">
        <p className="summary">
          {resolvidos} de {total} chamados resolvidos
        </p>
      </Panel>

      <Panel title="Chamados">
        <ChamadoList />
      </Panel>
    </>
  );
}
