import { createContext, useEffect, useState } from "react";
import { initialTickets } from "../data/chamados.js";

const CHAVE_STORAGE = "iteam:fila-atendimento";

// Valor padrão null: fora do Provider, quem ler o contexto recebe null
// e pode avisar com um erro claro.
export const ChamadosContext = createContext(null);

// Lê os chamados salvos. Se não houver dados, se o JSON for inválido
// ou se o valor não for um array, volta aos chamados iniciais.
function carregarChamados() {
  const salvo = localStorage.getItem(CHAVE_STORAGE);
  if (salvo === null) return initialTickets;

  try {
    const dados = JSON.parse(salvo);
    return Array.isArray(dados) ? dados : initialTickets;
  } catch {
    return initialTickets;
  }
}

// O Provider é o único dono dos chamados: estado, leitura inicial,
// persistência, título da aba e as ações que alteram a lista.
export function ChamadosProvider({ children }) {
  // Passar a função (sem parênteses) faz o React chamá-la só na primeira renderização.
  const [chamados, setChamados] = useState(carregarChamados);

  // Valores derivados do array: recalculados a cada renderização, sem estado extra.
  const total = chamados.length;
  const resolvidos = chamados.filter((chamado) => chamado.resolved).length;

  // Salva sempre que o array de chamados mudar.
  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(chamados));
  }, [chamados]);

  // Atualiza o título da aba; a limpeza restaura o título anterior.
  useEffect(() => {
    const tituloAnterior = document.title;
    document.title = `${resolvidos}/${total} chamados resolvidos`;

    return () => {
      document.title = tituloAnterior;
    };
  }, [resolvidos, total]);

  // Cria um novo array; só o chamado com o id clicado ganha um novo objeto.
  function alternarSituacao(id) {
    setChamados((atuais) =>
      atuais.map((chamado) =>
        chamado.id === id ? { ...chamado, resolved: !chamado.resolved } : chamado,
      ),
    );
  }

  // Cria um novo array sem o chamado escolhido.
  function excluirChamado(id) {
    setChamados((atuais) => atuais.filter((chamado) => chamado.id !== id));
  }

  // Recebe dados já validados pelo formulário e adiciona um novo chamado aberto.
  function cadastrarChamado(assunto, setor) {
    const novoChamado = {
      id: `chamado-${Date.now()}`,
      title: assunto,
      sector: setor,
      resolved: false,
    };
    setChamados((atuais) => [...atuais, novoChamado]);
  }

  const valor = {
    chamados,
    total,
    resolvidos,
    alternarSituacao,
    excluirChamado,
    cadastrarChamado,
  };

  return <ChamadosContext.Provider value={valor}>{children}</ChamadosContext.Provider>;
}
