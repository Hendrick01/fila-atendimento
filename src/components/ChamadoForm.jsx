import { useContext, useState } from "react";
import { ChamadosContext } from "../context/ChamadosContext.jsx";

const CAMPOS_VAZIOS = { assunto: "", setor: "" };

// Formulário controlado: os valores dos campos ficam em um único estado (objeto).
// Quando os dados são válidos, chama cadastrarChamado, obtida do contexto.
export default function ChamadoForm() {
  const contexto = useContext(ChamadosContext);
  const [campos, setCampos] = useState(CAMPOS_VAZIOS);
  const [erro, setErro] = useState("");

  if (contexto === null) {
    throw new Error("ChamadoForm precisa estar dentro de <ChamadosProvider>.");
  }

  const { cadastrarChamado } = contexto;

  // Um único handler para os dois campos: o atributo name diz qual chave atualizar.
  function handleChange(event) {
    const { name, value } = event.target;
    setCampos((atuais) => ({ ...atuais, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // impede o recarregamento da página

    const assunto = campos.assunto.trim();
    const setor = campos.setor.trim();

    if (assunto === "" || setor === "") {
      setErro("Preencha o assunto e o setor.");
      return; // os campos continuam com o que foi digitado
    }

    cadastrarChamado(assunto, setor);
    setCampos(CAMPOS_VAZIOS);
    setErro("");
  }

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="assunto">Assunto</label>
        <input
          id="assunto"
          name="assunto"
          type="text"
          value={campos.assunto}
          onChange={handleChange}
          placeholder="Ex.: Projetor não liga"
        />
      </div>

      <div className="field">
        <label htmlFor="setor">Setor</label>
        <input
          id="setor"
          name="setor"
          type="text"
          value={campos.setor}
          onChange={handleChange}
          placeholder="Ex.: Auditório"
        />
      </div>

      {erro && <p className="form-error">{erro}</p>}

      <div>
        <button type="submit">Cadastrar chamado</button>
      </div>
    </form>
  );
}
