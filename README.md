# Fila de Atendimento — Atividade integradora React

**ITEAM · Módulo 04 · Aulas 01–06**

Projeto inicial para uma atividade prática individual. O objetivo é transformar
uma tela estática em uma aplicação com componentes, estado, formulário e persistência.

**Aluno(a):** Hendrick Silva Ferreira

## Estrutura do projeto

- `package.json`: identifica o projeto, lista as dependências (React, Vite) e
  define os scripts `npm run dev`, `npm run build` e `npm run preview`.
- `src/main.jsx`: ponto de entrada. Encontra a `div#root` do `index.html`,
  cria a raiz do React e renderiza o componente `App`.
- `src/App.jsx`: componente principal. Monta a página com os demais componentes.
- `src/context/ChamadosContext.jsx`: contexto e Provider que guardam os
  chamados, leem e salvam no `localStorage`, atualizam o título da aba e
  oferecem as ações (cadastrar, resolver/reabrir, excluir).
- `src/components/`: componentes reutilizáveis da interface.
- `src/data/chamados.js`: os quatro chamados iniciais.

## Começar

1. Crie um repositório próprio a partir destes arquivos.
2. No terminal, execute:

```bash
npm install
npm run dev
```

3. Abra o endereço indicado pelo Vite.
4. Leia [ATIVIDADE.md](./ATIVIDADE.md) e siga as etapas na ordem.

**O que já está pronto:** estrutura Vite/React, três cartões estáticos, um arquivo
com quatro chamados e CSS para as telas.

**O que falta:** toda a lógica da atividade. Não há gabarito nem componentes
implementados no projeto inicial.
