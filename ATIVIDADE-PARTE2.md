# Atividade integradora — Fila de Atendimento · Parte 2

**Módulo 04 · Desenvolvimento Front-end com React · Aulas 07–08**  
**Formato:** individual · **Valor:** 10,0 pontos · **Entrega:** link do repositório pessoal.

**Mapa de nomes:** os dados usam `title` (assunto), `sector` (setor) e `resolved` (situação).

## Desafio

A Parte 1 já permite listar, resolver, reabrir, excluir e cadastrar chamados,
além de preservar os dados após F5. Agora a aplicação deve compartilhar
esse estado entre componentes e oferecer páginas sem perder as funções existentes.

As tarefas descrevem **o que precisa funcionar**. Descobrir **como fazer**
consultando a apostila e seu próprio projeto faz parte da avaliação.

## E7 — Contexto e responsabilidade do estado (Aula 07 · 4,0 pontos)

- [ ] Existe `src/context/ChamadosContext.jsx`, que exporta `ChamadosContext` e `ChamadosProvider`.
- [ ] O Provider passa a cuidar dos chamados, da leitura inicial dos dados, da persistência e das ações de cadastrar, resolver/reabrir e excluir.
- [ ] O total de resolvidos é calculado a partir dos chamados; não é um estado adicional.
- [ ] O Provider envolve todos os componentes que precisam dos dados.
- [ ] `ChamadoList` e `ChamadoForm` passam a obter os dados e as ações diretamente do contexto. Não recebem mais `tickets`, `onToggle`, `onDelete` ou `onAddTicket` por props.
- [ ] `ChamadoCard` continua recebendo seus dados e ações por props.
- [ ] `App` não guarda a lista de chamados em `useState` e não contém os handlers de cadastro, exclusão ou alternância.
- [ ] Um componente que usa o contexto fora do Provider produz erro com mensagem compreensível.
- [ ] Os painéis existentes continuam organizados assim: **Resumo** (contador), **Novo chamado** (formulário) e **Chamados** (lista).
- [ ] Tudo o que funcionava antes continua funcionando: quatro chamados iniciais, resolver/reabrir, excluir, cadastrar, preservar alterações após F5, recuperar dados inválidos e atualizar o título da aba.

**Teste de aceite:** repita todas as operações da Parte 1. Confira o Provider no ponto de entrada da aplicação e confirme que o `App` deixou de controlar os chamados.

## E8 — Navegação entre páginas (Aula 08 · 5,0 pontos)

- [ ] O roteador é instalado a partir da orientação da apostila, no **modo declarativo**.
- [ ] A aplicação é envolvida por `BrowserRouter` e usa `Routes` e `Route`.
- [ ] Crie a pasta `src/pages/` com quatro componentes: `FilaPage`, `NovoChamadoPage`, `SobrePage` e `NaoEncontradaPage`.
- [ ] A URL `/` exibe a fila; `/novo` exibe o cadastro; `/sobre` exibe informações do projeto; qualquer outro endereço mostra a página não encontrada.
- [ ] A página **Fila** contém os painéis **Resumo** (contador) e **Chamados** (lista). A página **Novo chamado** contém o painel **Cadastre um chamado** (formulário). A página **Sobre** contém um painel **Fila de Atendimento** (informação sobre o projeto). A página 404 contém um painel **404**.
- [ ] O cabeçalho exibe um menu com três `NavLink`: **Fila**, **Novo chamado** e **Sobre**.
- [ ] Apenas o link da rota atual recebe o destaque `active`; na página 404 nenhum link fica destacado.
- [ ] A página 404 mostra **Página não encontrada** e um `Link` **Voltar à fila**, que leva para `/`.
- [ ] Ao cadastrar com sucesso, o formulário mostra **Chamado cadastrado.** e um `Link` **Ver a fila**. Os campos ficam vazios.
- [ ] Trocar de página não recarrega a aplicação nem apaga os chamados. O novo cadastro aparece na fila e pode ser resolvido/reaberto/excluído.
- [ ] Abrir `/novo` diretamente pela barra de endereços ou atualizar a página com F5 funciona.
- [ ] A persistência e o título da aba continuam atualizados em **todas** as páginas.

**Teste de aceite:** abra `/`, vá a `/novo`, cadastre um chamado e clique em **Ver a fila**. Confira o novo cartão e o contador. Abra `/sobre`, teste um endereço inexistente e volte à fila. Pressione F5 em `/novo` e em `/sobre`.

## Critérios finais (1,0 ponto)

- [ ] `npm run dev` e `npm run build` funcionam sem erro.
- [ ] Sem tela branca, sem erro JavaScript e sem aviso de chaves no console.
- [ ] Pelo menos **dois commits novos**, um após E7 e outro após E8, visíveis no GitHub.
- [ ] `node_modules`, `dist` e `.env` não aparecem no repositório.

**Nota:** uma entrega parcial também será avaliada. A nota de cada etapa só é confirmada após o aluno responder corretamente **pelo menos duas de três perguntas orais** sobre as próprias decisões técnicas.

**Consulta liberada:** apostila, mapa das aulas e documentação oficial. IA pode ajudar a entender mensagens de erro. **Não peça código pronto**: esta atividade avalia a investigação e a capacidade de explicar o que você implementou.

**Fora do escopo (gera desconto na etapa):** `useNavigate`, `useParams`, `Outlet`, rotas aninhadas ou protegidas; `fetch`, Axios, chamadas de API; hooks personalizados, `useReducer`, `useMemo`, `useCallback`, `useRef`; TypeScript ou outras bibliotecas.

**Entrega:** somente o link público do seu repositório pessoal, com os commits da E7 e da E8.
