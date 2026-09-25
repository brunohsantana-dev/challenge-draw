# 🎲 Bora Codar

A responsive coding challenge picker that turns **“What should I build?”** into the next project.

🔗 **Live Demo:**  
https://brunohsantana-dev.github.io/challenge-draw/

---

## About the project

**Bora Codar** was built to help programming learners choose practical projects to work on.

Users can select a difficulty level, draw a challenge, view its requirements and visual reference, track completed projects and keep their progress saved in the browser.

The project was built with **HTML, CSS and vanilla JavaScript**, with a neon interface inspired by vaporwave and retro-tech visuals.

> The application interface is currently in Portuguese.

---

## ✨ Key features

- 8 coding challenges across two difficulty levels
- Random challenge selection
- Prevention of consecutive repeats when possible
- Filter for pending challenges only
- Project descriptions and requirements
- Expandable visual references
- Completed challenge tracking
- Completion counter and history
- Progress persistence with `localStorage`
- Reset progress option with confirmation
- Responsive layout
- Keyboard-friendly interaction
- Reduced-motion support

---

## ⚙️ How it works

Challenges are stored as objects containing information such as:

- name
- difficulty
- description
- requirements
- image reference

The application filters eligible challenges and randomly selects one using JavaScript.

Completed challenges are stored in an array and saved to the browser using `localStorage`, allowing progress to remain available between sessions.

The interface is updated dynamically through DOM manipulation and native `<dialog>` elements are used for modals.

---

## 🧠 What I practiced

This project helped me work with:

- Arrays and objects
- Functions and conditional logic
- DOM manipulation
- Event handling
- Dynamic element creation
- `filter()`
- `forEach()`
- `includes()`
- `indexOf()`
- `splice()`
- `Math.random()` and `Math.floor()`
- `localStorage`
- JSON serialization
- `try/catch`
- Native `<dialog>` modals
- Responsive CSS
- Accessibility considerations

---

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

No JavaScript frameworks or libraries were used.

---

## 🚀 Run locally

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Run `index.html` using Live Server.

No dependencies or installation steps are required.

---

## 📌 Project scope

Bora Codar is a learning project built during my software development studies.

The application suggests projects for users to build independently. It does not generate, inspect or evaluate the code of those projects.

AI tools were used as support during development for explanations, code review and visual reference generation. The project itself was developed step by step as part of my learning process.

---

<details>
<summary><strong>🇧🇷 Sobre o projeto em português</strong></summary>

<br>

**Bora Codar** é um sorteador de desafios criado para ajudar quem está aprendendo programação a escolher o próximo projeto para praticar.

O usuário pode selecionar uma dificuldade, sortear um projeto, visualizar seus requisitos e referência visual, marcar desafios como concluídos e acompanhar seu progresso.

O progresso é salvo no navegador através de `localStorage`.

### Principais funcionalidades

- 8 desafios divididos em duas dificuldades
- Sorteio de projetos
- Filtro de desafios pendentes
- Controle de projetos concluídos
- Contador e histórico de conclusões
- Referências visuais ampliáveis
- Progresso salvo no navegador
- Layout responsivo
- Navegação por teclado
- Preferência de movimento reduzido

O projeto foi desenvolvido com HTML, CSS e JavaScript puro durante meus estudos de desenvolvimento web.

</details>

---

## 👨‍💻 Author

**Bruno Santana**

[LinkedIn](https://www.linkedin.com/in/brunohsantana) ·
[GitHub](https://github.com/brunohsantana-dev)
