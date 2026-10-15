import { useContext } from "react";
import { ChamadosContext } from "../context/ChamadosContext.jsx";
import ChamadoCard from "./ChamadoCard.jsx";

// Lê os chamados e as ações direto do contexto e gera um cartão para cada item.
export default function ChamadoList() {
  const contexto = useContext(ChamadosContext);
  if (contexto === null) {
    throw new Error("ChamadoList precisa estar dentro de <ChamadosProvider>.");
  }

  const { chamados, alternarSituacao, excluirChamado } = contexto;

  if (chamados.length === 0) {
    return <p className="summary">Nenhum chamado cadastrado.</p>;
  }

  return (
    <div className="ticket-list">
      {chamados.map((chamado) => (
        <ChamadoCard
          key={chamado.id}
          chamado={chamado}
          onAlternar={alternarSituacao}
          onExcluir={excluirChamado}
        />
      ))}
    </div>
  );
}
