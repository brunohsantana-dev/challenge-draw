// Elementos que vamos usar para controlar o sorteio.
const dificuldade = document.querySelector("#dificuldade");
const botaoSortear = document.querySelector("#botao-sortear");
const nomeDesafio = document.querySelector("#nome-desafio");
const descricaoDesafio = document.querySelector("#descricao-desafio");
const imagemDesafio = document.querySelector("#imagem-desafio");
const resultado = document.querySelector("#resultado");
const botaoFechar = document.querySelector("#fechar-resultado");
const requisitosDesafio = document.querySelector("#requisitos-desafio");
const tituloRequisitos = document.querySelector("#titulo-requisitos");

// Cada objeto reúne as informações de um desafio.
const desafios = [
  {
    nome: "Página de links pessoais",
    dificuldade: "moleza",
    descricao:
      "Crie uma página com sua foto, uma apresentação e links para suas redes.",
  },
  {
    nome: "Landing page de cafeteria",
    dificuldade: "moleza",
    descricao:
      "Crie uma página com apresentação da cafeteria, produtos e rodapé.",
    imagem: "./assets/cafeteria.png",
    imagemAlt: "Exemplo de landing page de cafeteria com cards de produtos",
    requisitos: [
      "Criar um cabeçalho com nome e navegação.",
      "Montar uma apresentação com imagem e botão.",
      "Exibir pelo menos três produtos em cards.",
      "Adaptar o layout para celular.",
    ],
  },
  {
    nome: "Miniportfólio",
    dificuldade: "moleza",
    descricao:
      "Monte um portfólio com apresentação, habilidades e cards de projetos.",
  },
  {
    nome: "Cardápio digital",
    dificuldade: "moleza",
    descricao:
      "Organize um cardápio com categorias, imagens, nomes e preços.",
  },
  {
    nome: "Conversor de moedas",
    dificuldade: "desafio",
    descricao:
      "Converta um valor de reais para outra moeda usando uma cotação fixa.",
  },
  {
    nome: "Sorteador de números",
    dificuldade: "desafio",
    descricao:
      "Sorteie um número inteiro entre um mínimo e um máximo informados.",
  },
  {
    nome: "Quiz de programação",
    dificuldade: "desafio",
    descricao:
      "Mostre perguntas com alternativas e calcule a pontuação do jogador.",
  },
  {
    nome: "Montador de pedido",
    dificuldade: "desafio",
    descricao:
      "Permita escolher produtos e atualize o valor total do pedido na tela.",
  },
];

// Guarda o último desafio entre os cliques.
let ultimoDesafio = null;

botaoFechar.addEventListener("click", function () {
  resultado.close();
});

botaoSortear.addEventListener("click", function () {
  const dificuldadeEscolhida = dificuldade.value;

  // Filtra pela dificuldade e exclui o resultado anterior.
  const desafiosFiltrados = desafios.filter(function (desafio) {
    const mesmaDificuldade =
      desafio.dificuldade === dificuldadeEscolhida;

    const diferenteDoUltimo = desafio !== ultimoDesafio;

    return mesmaDificuldade && diferenteDoUltimo;
  });

  // Sorteia uma posição dentro da lista filtrada.
  const indiceSorteado = Math.floor(
    Math.random() * desafiosFiltrados.length
  );

  const desafioSorteado = desafiosFiltrados[indiceSorteado];

  ultimoDesafio = desafioSorteado;

  // Atualiza o nome e a descrição.
  nomeDesafio.textContent = desafioSorteado.nome;
  descricaoDesafio.textContent = desafioSorteado.descricao;

  // Mostra a imagem apenas quando o desafio possui uma referência.
  if (desafioSorteado.imagem) {
    imagemDesafio.src = desafioSorteado.imagem;
    imagemDesafio.alt = desafioSorteado.imagemAlt;
    imagemDesafio.hidden = false;
  } else {
    imagemDesafio.hidden = true;
    imagemDesafio.removeAttribute("src");
    imagemDesafio.alt = "";
  }

  // Remove os requisitos do sorteio anterior.
  requisitosDesafio.replaceChildren();

  const requisitos = desafioSorteado.requisitos || [];

  // Esconde o título quando não existem requisitos cadastrados.
  tituloRequisitos.hidden = requisitos.length === 0;

  requisitos.forEach(function (requisito) {
    const item = document.createElement("li");

    item.textContent = requisito;

    requisitosDesafio.appendChild(item);
  });

  // Abre o resultado por cima da página.
  resultado.showModal();

  // Reinicia a animação a cada sorteio.
  resultado.classList.remove("animar-resultado");
  void resultado.offsetWidth;
  resultado.classList.add("animar-resultado");
});