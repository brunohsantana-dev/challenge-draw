# Bora Codar 🎲

[Português](#portugues) · [English](#english)

<a id="portugues"></a>

## 🇧🇷 Português

Sorteador de desafios de programação para praticar HTML, CSS e JavaScript. Escolha uma dificuldade, sorteie um projeto e use a ideia como ponto de partida para estudar.

O visual segue uma temática neon inspirada em vaporwave, com gradientes, cores vibrantes e a fonte Oxanium.

### Funcionalidades

- Seleção de dificuldade.
- Sorteio sem repetição consecutiva.
- Resultado em uma janela modal com animação.
- Exibição de imagem e requisitos quando cadastrados.
- Fechamento pelo botão × ou pela tecla Esc.
- Layout adaptável a telas menores.
- Respeito à preferência de redução de movimento do dispositivo.

### Desafios disponíveis

| Moleza — HTML e CSS | Desafio — com JavaScript |
|---|---|
| Página de links pessoais | Conversor de moedas com cotação fixa |
| Landing page de cafeteria | Sorteador de números |
| Miniportfólio | Quiz de programação |
| Cardápio digital | Montador de pedido |

### Tecnologias

- HTML5
- CSS3
- JavaScript puro
- Google Fonts — Oxanium

Sem frameworks, bibliotecas ou instalação de dependências.

### Como executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` no navegador.
3. Escolha uma dificuldade e clique em **Sortear desafio**.

A fonte Oxanium é carregada pela internet. Caso não esteja disponível, a página utiliza uma fonte alternativa.

### Estrutura do projeto

```text
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── cafeteria.png
```

### Como funciona

Os desafios ficam em um array de objetos. Cada objeto contém nome, dificuldade e descrição, além de imagem e requisitos opcionais.

Ao clicar em sortear:

1. O JavaScript lê a dificuldade escolhida.
2. `filter()` seleciona os desafios dessa dificuldade e exclui o último resultado.
3. `Math.random()` e `Math.floor()` escolhem uma posição da lista.
4. O desafio selecionado atualiza o conteúdo da página.
5. `showModal()` abre a janela com o resultado.

O último desafio fica guardado em uma variável. Ao recarregar a página, essa memória é reiniciada.

### Aprendizados praticados

- Estrutura semântica com HTML.
- Gradientes, animações e responsividade com CSS.
- Manipulação do DOM e eventos de clique.
- Arrays, objetos e condições.
- Métodos `filter()` e `forEach()`.
- Criação de elementos com `createElement()`.
- Uso do elemento nativo `<dialog>`.

### Estado atual

O sorteador possui oito desafios, divididos igualmente entre as duas dificuldades.

A cafeteria é o primeiro desafio com imagem e requisitos cadastrados. A imagem foi gerada com IA como referência visual e não representa um site funcional.

A interface da aplicação está em português. Este README está disponível em português e inglês.

### Próximas melhorias

- [ ] Adicionar requisitos aos demais desafios.
- [ ] Criar imagens de referência para os outros projetos.
- [ ] Permitir marcar desafios como concluídos.
- [ ] Salvar o progresso no navegador.

### Sobre

Projeto de estudo desenvolvido passo a passo para praticar os conteúdos aprendidos no DevClub, com a intenção de participar do concurso de projetos.

As implementações dos projetos sorteados não estão incluídas neste repositório. Cada desafio é uma proposta para desenvolver uma nova aplicação.

---

<a id="english"></a>

## 🇺🇸 English

A coding challenge picker for practicing HTML, CSS, and JavaScript. Choose a difficulty, draw a project, and use the idea as a starting point for learning.

The interface features a vaporwave-inspired neon theme with gradients, vibrant colors, and the Oxanium font.

### Features

- Difficulty selection.
- Random challenges without consecutive repeats.
- Results displayed in an animated modal.
- Reference images and requirements displayed when available.
- Close the modal using the × button or the Esc key.
- Responsive layout for smaller screens.
- Support for the device’s reduced-motion preference.

### Available challenges

| Moleza (Easy) — HTML & CSS | Desafio (Intermediate) — with JavaScript |
|---|---|
| Personal links page | Currency converter with a fixed exchange rate |
| Coffee shop landing page | Random number generator |
| Mini portfolio | Programming quiz |
| Digital menu | Order builder |

### Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts — Oxanium

No frameworks, libraries, or dependency installation required.

### Getting started

1. Download or clone this repository.
2. Open `index.html` in your browser.
3. Choose a difficulty and click **Sortear desafio** (Draw a challenge).

Oxanium loads through an internet connection. If unavailable, the page uses a fallback font.

### Project structure

```text
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── cafeteria.png
```

### How it works

Challenges are stored in an array of objects. Each object contains a name, difficulty, and description, plus an optional image and requirements.

When the draw button is clicked:

1. JavaScript reads the selected difficulty.
2. `filter()` selects matching challenges and excludes the previous result.
3. `Math.random()` and `Math.floor()` select an index from the list.
4. The selected challenge updates the page content.
5. `showModal()` opens the result dialog.

The previous challenge is stored in a variable. Reloading the page resets this memory.

### Learning topics

- Semantic HTML.
- CSS gradients, animations, and responsive layouts.
- DOM manipulation and click events.
- Arrays, objects, and conditional statements.
- The `filter()` and `forEach()` methods.
- Creating elements with `createElement()`.
- Using the native `<dialog>` element.

### Current status

The picker includes eight challenges, evenly divided between the two difficulty levels.

The coffee shop challenge is the first to include a reference image and requirements. Its image was generated with AI as a visual reference and does not represent a working website.

The application interface is in Portuguese. This README is available in Portuguese and English.

### Planned improvements

- [ ] Add requirements to the remaining challenges.
- [ ] Create reference images for the other projects.
- [ ] Allow challenges to be marked as completed.
- [ ] Save progress in the browser.

### About

A learning project built step by step to practice concepts studied at DevClub, with the intention of entering its project competition.

Implementations of the suggested projects are not included in this repository. Each challenge is a prompt for building a new application.
