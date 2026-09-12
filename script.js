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
const botaoConcluir = document.querySelector("#concluir-desafio");

// Encontra o botão que reinicia o progresso.
const botaoReiniciar = document.querySelector("#reiniciar-progresso");

// Encontra o texto que vai mostrar o progresso na página.
const progresso = document.querySelector("#progresso");

// Elementos que mostram os desafios concluídos fora do modal.
const listaConcluidos = document.querySelector("#lista-concluidos");
const mensagemSemConcluidos = document.querySelector(
    "#mensagem-sem-concluidos"
);

// Controles para filtrar pendências e mostrar avisos.
const somentePendentes = document.querySelector("#somente-pendentes");
const avisoSorteio = document.querySelector("#aviso-sorteio");

// Cada objeto reúne as informações de um desafio.
const desafios = [

    {
        nome: "Página de links pessoais",
        dificuldade: "moleza",
        descricao:
            "Crie uma página com sua foto, uma apresentação e links para suas redes.",
        requisitos: [
            "Adicionar uma foto ou um avatar com texto alternativo.",
            "Exibir seu nome e uma breve apresentação.",
            "Criar pelo menos quatro links com destinos válidos.",
            "Estilizar os links com efeitos de hover e foco pelo teclado.",
            "Adaptar a página para celular.",
        ],
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
        requisitos: [
            "Criar uma apresentação com seu nome e área de interesse.",
            "Adicionar uma seção sobre você e suas habilidades.",
            "Exibir pelo menos três cards de projetos.",
            "Incluir links para seu GitHub e uma forma de contato.",
            "Adaptar o layout para celular.",
        ],
    },
    {
        nome: "Cardápio digital",
        dificuldade: "moleza",
        descricao:
            "Organize um cardápio com categorias, imagens, nomes e preços.",
        requisitos: [
            "Mostrar o nome e uma breve apresentação do estabelecimento.",
            "Organizar os produtos em pelo menos duas categorias.",
            "Exibir pelo menos seis produtos com nome e preço.",
            "Adicionar imagens com textos alternativos.",
            "Organizar o cardápio para funcionar bem no celular.",
        ]
    },
    {
        nome: "Conversor de moedas",
        dificuldade: "desafio",
        descricao:
            "Converta um valor de reais para outra moeda usando uma cotação fixa.",
        requisitos: [
            "Criar um campo para informar o valor em reais.",
            "Permitir escolher entre dólar e euro.",
            "Usar cotações fixas e informar que são demonstrativas.",
            "Validar campos vazios e valores negativos.",
            "Mostrar o resultado formatado na moeda escolhida.",
        ],
    },
    {
        nome: "Sorteador de números",
        dificuldade: "desafio",
        descricao:
            "Sorteie um número inteiro entre um mínimo e um máximo informados.",
        requisitos: [
            "Criar campos para os valores mínimo e máximo.",
            "Validar se os dois campos contêm números inteiros.",
            "Impedir o sorteio quando o mínimo for maior que o máximo.",
            "Sortear um número incluindo os dois limites informados.",
            "Atualizar o resultado na tela a cada clique.",
        ],
    },
    {
        nome: "Quiz de programação",
        dificuldade: "desafio",
        descricao:
            "Mostre perguntas com alternativas e calcule a pontuação do jogador.",
        requisitos: [
            "Cadastrar pelo menos cinco perguntas em um array de objetos.",
            "Mostrar uma pergunta por vez com suas alternativas.",
            "Permitir apenas uma resposta por pergunta.",
            "Informar se a resposta está correta e atualizar a pontuação.",
            "Exibir o resultado final e permitir reiniciar o quiz.",
        ],
    },
    {
        nome: "Montador de pedido",
        dificuldade: "desafio",
        descricao:
            "Permita escolher produtos e atualize o valor total do pedido na tela.",
        requisitos: [
            "Cadastrar pelo menos quatro produtos com nome e preço.",
            "Exibir os produtos disponíveis para adicionar ao pedido.",
            "Permitir adicionar e remover itens.",
            "Atualizar o total sempre que o pedido mudar.",
            "Mostrar uma mensagem quando o pedido estiver vazio.",
        ],
    },
];

// Guarda o último desafio entre os cliques.
let ultimoDesafio = null;

// Identifica o progresso deste projeto no armazenamento do navegador.
const chaveProgresso = "bora-codar-concluidos";

// Carrega os nomes salvos anteriormente.
const desafiosConcluidos = carregarProgresso();

function carregarProgresso() {
    try {
        const dadosSalvos = localStorage.getItem(chaveProgresso);

        // Na primeira visita, ainda não existe progresso salvo.
        if (dadosSalvos === null) {
            return [];
        }

        // Converte o texto armazenado de volta para uma lista.
        const dados = JSON.parse(dadosSalvos);

        // Aceita apenas uma lista formada por nomes.
        const listaValida =
            Array.isArray(dados) &&
            dados.every(function (nome) {
                return typeof nome === "string";
            });

        if (listaValida) {
            return dados;
        }

        return [];
    } catch (erro) {
        // Se a leitura falhar, permite continuar com uma lista vazia.
        console.warn("Não foi possível carregar o progresso.", erro);
        return [];
    }
}

function salvarProgresso() {
    try {
        // localStorage guarda texto: transformamos o array em JSON.
        const dados = JSON.stringify(desafiosConcluidos);

        localStorage.setItem(chaveProgresso, dados);
    } catch (erro) {
        // A marcação continua nesta sessão, mesmo se não puder ser salva.
        console.warn("Não foi possível salvar o progresso.", erro);
    }
}

botaoReiniciar.addEventListener("click", function () {
    // Não há o que apagar quando a lista já está vazia.
    if (desafiosConcluidos.length === 0) {
        return;
    }

    // A confirmação retorna true ao confirmar e false ao cancelar.
    const confirmou = window.confirm(
        "Deseja apagar todos os desafios concluídos e começar novamente?"
    );

    // Cancelar encerra o evento sem alterar o progresso.
    if (!confirmou) {
        return;
    }

    // Esvazia o array existente, mantendo a mesma variável.
    desafiosConcluidos.length = 0;

    // Salva a lista vazia para a mudança persistir ao atualizar a página.
    salvarProgresso();

    // Atualiza o contador e a lista de nomes.
    atualizarProgresso();

    // Ajusta também o botão do último desafio sorteado.
    atualizarBotaoConcluir();
});

// Atualiza o texto usando o tamanho das duas listas.
function atualizarProgresso() {
    // Conta os desafios concluídos e o total disponível.
    const quantidadeConcluida = desafiosConcluidos.length;
    const quantidadeTotal = desafios.length;

    // Só permite reiniciar quando existe alguma conclusão.
    botaoReiniciar.disabled = quantidadeConcluida === 0;

    // Atualiza o contador que já existe na página.
    progresso.textContent =
        `${quantidadeConcluida} de ${quantidadeTotal} desafios concluídos`;

    // Limpa a lista visual para não duplicar nomes a cada atualização.
    listaConcluidos.replaceChildren();

    // Mostra a orientação somente quando não há desafios concluídos.
    mensagemSemConcluidos.hidden = quantidadeConcluida > 0;

    // Esconde a lista vazia para evitar um espaço desnecessário.
    listaConcluidos.hidden = quantidadeConcluida === 0;

    // Cria um item visual para cada nome guardado no progresso.
    desafiosConcluidos.forEach(function (nome) {
        const item = document.createElement("li");

        // Insere o nome como texto dentro do item.
        item.textContent = nome;

        // Adiciona o item à lista que está abaixo do contador.
        listaConcluidos.appendChild(item);
    });
}

function atualizarBotaoConcluir() {
    // Sem um desafio sorteado, não há botão para atualizar.
    if (ultimoDesafio === null) {
        return;
    }

    // Verifica se o nome do desafio atual está na lista de concluídos.
    const jaConcluido = desafiosConcluidos.includes(ultimoDesafio.nome);

    // Mantém o botão disponível para concluir ou desfazer.
    botaoConcluir.disabled = false;

    // Ajusta o texto conforme o estado do desafio.
    if (jaConcluido) {
        botaoConcluir.textContent = "Desfazer conclusão";
    } else {
        botaoConcluir.textContent = "Marcar como concluído";
    }

    // Aplica o visual de concluído somente quando necessário.
    botaoConcluir.classList.toggle("concluido", jaConcluido);
}

botaoConcluir.addEventListener("click", function () {
    // Evita tentar concluir um desafio antes de realizar um sorteio.
    if (ultimoDesafio === null) {
        return;
    }

    const nome = ultimoDesafio.nome;

    // Retorna a posição do nome na lista ou -1 se ele não estiver nela.
    const indice = desafiosConcluidos.indexOf(nome);

    if (indice === -1) {
        // Se ainda não está concluído, adiciona o nome à lista.
        desafiosConcluidos.push(nome);
    } else {
        // Remove apenas o nome encontrado, mantendo os outros concluídos.
        desafiosConcluidos.splice(indice, 1);
    }

    // Salva a alteração e atualiza as informações da interface.
    salvarProgresso();
    atualizarProgresso();
    atualizarBotaoConcluir();
});

botaoFechar.addEventListener("click", function () {
    resultado.close();
});

botaoSortear.addEventListener("click", function () {
    const dificuldadeEscolhida = dificuldade.value;

    // Limpa qualquer aviso deixado pelo sorteio anterior.
    avisoSorteio.hidden = true;
    avisoSorteio.textContent = "";

    // Primeiro, seleciona os desafios permitidos pelas escolhas da pessoa.
    const desafiosDisponiveis = desafios.filter(function (desafio) {
        const mesmaDificuldade =
            desafio.dificuldade === dificuldadeEscolhida;

        const jaConcluido = desafiosConcluidos.includes(desafio.nome);

        // Se a opção estiver desmarcada, aceita concluídos também.
        const passaNoFiltro =
            !somentePendentes.checked || !jaConcluido;

        return mesmaDificuldade && passaNoFiltro;
    });

    // Evita tentar sortear uma posição de uma lista vazia.
    if (desafiosDisponiveis.length === 0) {
        avisoSorteio.textContent =
            "Você concluiu todos os desafios desta dificuldade! Escolha outra ou desmarque o filtro de pendentes.";

        avisoSorteio.hidden = false;

        // Encerra o clique antes de atualizar ou abrir o modal.
        return;
    }

    // Evita repetir o último resultado quando há outras opções.
    // Se sobrar apenas um desafio, permite sorteá-lo novamente.
    const desafiosFiltrados = desafiosDisponiveis.filter(function (desafio) {
        return desafiosDisponiveis.length === 1 || desafio !== ultimoDesafio;
    });

    // Escolhe uma posição válida dentro da lista final.
    const indiceSorteado = Math.floor(
        Math.random() * desafiosFiltrados.length
    );

    const desafioSorteado = desafiosFiltrados[indiceSorteado];


    // Guarda o desafio atual para os botões usarem.
    ultimoDesafio = desafioSorteado;

    // A função verifica se ele está concluído e ajusta o botão.
    atualizarBotaoConcluir();


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

// Mostra o progresso inicial após todas as listas seadrem criadas.
atualizarProgresso();