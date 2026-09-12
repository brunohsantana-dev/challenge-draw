# Bora Codar 🎲

Um sorteador de desafios para transformar a dúvida “o que vou construir?” em um próximo projeto.

A coding challenge picker that turns “what should I build?” into your next project.

https://brunohsantana-dev.github.io/challenge-draw/

[Português](#portugues) · [English](#english)

<a id="portugues"></a>

## 🇧🇷 Sobre o projeto

Bora Codar é um projeto de estudo desenvolvido com HTML, CSS e JavaScript puro.

A proposta é ajudar quem está aprendendo programação a escolher um projeto para praticar. Cada desafio apresenta uma descrição, requisitos e uma referência visual que pode ser ampliada.

A interface utiliza uma estética neon inspirada em vaporwave, com gradientes e a fonte Oxanium.

## Funcionalidades

- Oito desafios divididos entre duas dificuldades.
- Sorteio sem repetição consecutiva quando há mais de uma opção disponível.
- Filtro para sortear apenas desafios pendentes.
- Aviso quando não existem desafios disponíveis no filtro escolhido.
- Resultado em um modal com animação.
- Referências visuais clicáveis, com ampliação em outro modal.
- Requisitos específicos para cada projeto.
- Marcação e desmarcação de desafios concluídos.
- Contador e lista de conclusões.
- Progresso salvo no navegador com `localStorage`.
- Reinício do progresso com confirmação.
- Layout responsivo, navegação por teclado e respeito à preferência de movimento reduzido.

## Desafios disponíveis

| Moleza — HTML e CSS | Desafio — com JavaScript |
|---|---|
| Página de links pessoais | Conversor de moedas |
| Landing page de cafeteria | Sorteador de números |
| Miniportfólio | Quiz de programação |
| Cardápio digital | Montador de pedido |

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Google Fonts — Oxanium
- Git e GitHub

Sem frameworks ou bibliotecas de JavaScript.

## Como usar

1. Escolha uma dificuldade.
2. Se desejar, marque a opção de sortear apenas desafios pendentes.
3. Clique em **Sortear desafio**.
4. Leia os requisitos e clique na imagem para ampliar a referência.
5. Desenvolva o projeto e marque o desafio como concluído.
6. Acompanhe suas conclusões abaixo do contador.

É possível desfazer uma conclusão ou reiniciar todo o progresso.

A conclusão é registrada manualmente pelo usuário. O aplicativo não analisa nem avalia o código dos projetos desenvolvidos.

## Executar localmente

1. Baixe ou clone este repositório.
2. Abra a pasta no VS Code.
3. Inicie o `index.html` usando a extensão Live Server.

Não é necessário instalar dependências do projeto.

A fonte Oxanium depende de conexão com a internet. Caso não carregue, a interface utiliza uma fonte alternativa.

## Estrutura

```text
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── cafeteria.png
    ├── links-pessoais.png
    ├── miniportfolio.png
    ├── cardapio-digital.png
    ├── conversor-moedas.png
    ├── sorteador-numeros.png
    ├── quiz-programacao.png
    └── montador-pedido.png
```

## Como funciona

Os desafios são armazenados em um array de objetos com nome, dificuldade, descrição, requisitos e caminho da imagem.

O sorteio utiliza `filter()` para selecionar as opções elegíveis e `Math.random()` com `Math.floor()` para escolher um resultado.

Quando existe apenas uma opção disponível, ela pode ser sorteada novamente. Quando não existe nenhuma, a interface apresenta um aviso.

O resultado atualiza elementos do DOM e é exibido com o método `showModal()` do elemento nativo `<dialog>`.

As conclusões ficam em um array, convertido em JSON para armazenamento no `localStorage`.

## Sobre o progresso salvo

- Os dados permanecem no mesmo navegador e endereço do site.
- Não há conta, servidor de dados ou sincronização entre dispositivos.
- Limpar os dados do site ou confirmar o reinício remove o progresso.
- Se o armazenamento estiver indisponível, o aplicativo permite continuar usando o progresso durante a sessão.

## Aprendizados

- HTML semântico e formulários.
- CSS responsivo, gradientes e animações.
- Manipulação do DOM e eventos.
- Arrays, objetos e condições.
- Funções e organização de responsabilidades.
- Métodos `filter()`, `forEach()`, `includes()`, `indexOf()` e `splice()`.
- Criação de elementos com `createElement()`.
- Modais com `<dialog>`.
- Persistência com `localStorage` e JSON.
- Tratamento de falhas com `try/catch`.

## Desenvolvimento e referências

Projeto desenvolvido por Bruno, passo a passo, durante seus estudos no DevClub, com apoio de IA para explicações, revisão de trechos e geração das referências visuais.

As imagens são exemplos de layout. Elas não representam aplicações funcionais nem obrigam a reprodução exata do design.

Os projetos sugeridos pelo sorteador devem ser desenvolvidos separadamente e não estão implementados neste repositório.

---

<a id="english"></a>

## 🇺🇸 About

Bora Codar is a learning project built with HTML, CSS, and vanilla JavaScript.

It helps programming learners choose a project to practice. Each challenge includes a description, requirements, and an expandable visual reference.

The interface features a vaporwave-inspired neon theme, gradients, and the Oxanium font.

The application interface is in Portuguese.

## Features

- Eight challenges across two difficulty levels.
- No consecutive repeats when more than one option is available.
- Filter for pending challenges only.
- Feedback when no challenges match the selected filter.
- Animated result modal.
- Clickable visual references displayed in a larger modal.
- Project-specific requirements.
- Mark challenges as completed or undo completion.
- Completion counter and list.
- Progress stored in the browser using `localStorage`.
- Progress reset with confirmation.
- Responsive layout, keyboard navigation, and reduced-motion support.

## Available challenges

| Moleza (Easy) — HTML & CSS | Desafio (Intermediate) — with JavaScript |
|---|---|
| Personal links page | Currency converter |
| Coffee shop landing page | Random number generator |
| Mini portfolio | Programming quiz |
| Digital menu | Order builder |

## Technologies

- HTML5
- CSS3
- JavaScript
- Google Fonts — Oxanium
- Git and GitHub

No JavaScript frameworks or libraries.

## How to use

1. Select a difficulty.
2. Optionally enable the pending-only filter.
3. Click **Sortear desafio** to draw a challenge.
4. Read the requirements and click the image to enlarge it.
5. Build the project and mark the challenge as completed.
6. View your completed challenges below the progress counter.

You can undo a completion or reset all progress.

Completion is recorded manually by the user. The application does not inspect or evaluate the code of completed projects.

## Run locally

1. Download or clone this repository.
2. Open the folder in VS Code.
3. Launch `index.html` using the Live Server extension.

No project dependencies need to be installed.

Oxanium requires an internet connection. A fallback font is used if it cannot load.

## Project structure

The project contains `index.html`, `style.css`, `script.js`, and an `assets` folder with eight reference images. The complete file tree is shown in the Portuguese section above.

## How it works

Challenges are stored in an array of objects containing a name, difficulty, description, requirements, and image path.

The picker uses `filter()` to select eligible challenges and `Math.random()` with `Math.floor()` to choose a result.

If only one option remains, it can be drawn again. If none remain, the interface displays a message.

The result updates DOM elements and opens through the native `<dialog>` element’s `showModal()` method.

Completed challenge names are stored in an array and serialized as JSON for `localStorage`.

## Saved progress

- Data stays in the same browser and site origin.
- There are no accounts, backend data services, or cross-device synchronization.
- Clearing site data or confirming a reset removes progress.
- If storage is unavailable, the application can still track progress during the current session.

## Learning topics

- Semantic HTML and forms.
- Responsive CSS, gradients, and animations.
- DOM manipulation and events.
- Arrays, objects, and conditional logic.
- Functions and separation of responsibilities.
- `filter()`, `forEach()`, `includes()`, `indexOf()`, and `splice()`.
- Element creation with `createElement()`.
- Native `<dialog>` modals.
- Persistence with `localStorage` and JSON.
- Error handling with `try/catch`.

## Development and references

Built by Bruno step by step while studying at DevClub, with AI assistance for explanations, code review, and visual reference generation.

The images are layout examples, not working applications or mandatory designs to reproduce exactly.

The projects suggested by the picker are intended to be built separately and are not implemented in this repository.

### About

A learning project built step by step to practice concepts studied at DevClub, with the intention of entering its project competition.

Implementations of the suggested projects are not included in this repository. Each challenge is a prompt for building a new application.
