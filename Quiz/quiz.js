
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual o açúcar mais presente no mel?",
    alternativaA : "Frutose",
    alternativaB : "Maltose",
    correta      : "Frutose",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Quais os quatro tipos mais comuns de mel",
    alternativaA : "De laranjeira, De eucalipto, De uruçu e Silvestre",
    alternativaB : "Cipó-uva, Bracatinga, Mandaçaia, Jataí ",
    correta      : "De laranjeira, De eucalipto, De uruçu e Silvestre",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Mel faz bem para as feridas",
    alternativaA : "Mito",
    alternativaB : "Verdade",
    correta      : "Verdade",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual é o nome da Abelha mais comum do Brasil?",
    alternativaA : "Apís Melífera",
    alternativaB : "Melipona quadrifasciata",
    correta      : "Apís Melífera",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Mel com limão é bom por que?",
    alternativaA : "Beneficiam o organismo",
    alternativaB : "Fonte de vitamina B & C, atua no sistema imunológico como anti-inflamatório",
    correta      : "Fonte de vitamina B & C, atua no sistema imunológico como anti-inflamatório",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Verdadeiro ou Falso: Mel é bom para a pele",
    alternativaA : "Falso",
    alternativaB : "Verdadeiro",
    correta      : "Verdadeiro",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Verdadeiro ou Falso: Pessoas que possuem diabetes podem consumir mel a vontade",
    alternativaA : "Falso",
    alternativaB : "Verdadeiro",
    correta      : "Falso",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "O primeiro registro de consumo de mel é datado em:",
    alternativaA : "3.300 a.c",
    alternativaB : "5.500 a.c",
    correta      : "5.500 a.c",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Método adequado para descristalizar o mel",
    alternativaA : "Banho Maria",
    alternativaB : "Direto na panela ",
    correta      : "Banho Maria",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual o principal beneficio do mel?",
    alternativaA : "Tratar hemorróidas",
    alternativaB : "Melhorar imunidade do corpo",
    correta      : "Melhorar imunidade do corpo",
}

const q11 = {
    numQuestao   : 11,
    pergunta     : "Embalagem adequada para armazenar o mel?",
    alternativaA : "Vidro",
    alternativaB : "Isopor",
    correta      : "Vidro",
}
const q12 = {
    numQuestao   : 12,
    pergunta     : "Tipo de mel mais escuro?",
    alternativaA : "Eucalipto",
    alternativaB : "Borá",
    correta      : "Eucalipto",
}

const q13 = {
    numQuestao   : 13,
    pergunta     : "Verdadeiro ou Falso: Crianças de menos de um ano não podem consumir mel",
    alternativaA : "Falso",
    alternativaB : "Verdadeiro",
    correta      : "Verdadeiro",
}

const q14 = {
    numQuestao   : 14,
    pergunta     : "Como surgiu a expressão lua de mel?",
    alternativaA : "Mel era coletado em luas cheias",
    alternativaB : "Irlandeses tomavam uma bebida a base de mel e malte antes da noite de núpcias",
    correta      : "Irlandeses tomavam uma bebida a base de mel e malte antes da noite de núpcias",
}

const q15 = {
    numQuestao   : 15,
    pergunta     : "Em média quantas abelhas fazem um kilo de mel?",
    alternativaA : "2000",
    alternativaB : "6000",
    correta      : "2000",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}