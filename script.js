//criação das constantes para manipular os elementos HTML

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
//lista de perguntas com os objetos(itens) e seus atributos:enunciado, e lista de alternativas
//com os atributos texto e afirmação
const perguntas = [
    {
        enunciado: "Quais práticas tradicionais africanas utilizam ervas medicinais e também envolvem o uso de substâncias psicoativas na cultura local?
        alternativas: [
            {
            texto: "Rituais de iniciação que usam ervas medicinais e substâncias naturais para induzir estados alterados de consciência.
            afirmacao: "verdadeira" 
            },
            {
            texto: "Uso de chás de ervas para tratamentos de saúde, sem qualquer relação com práticas espirituais ou uso de drogas.
            afirmacao: "verdadeira" 
            },
        ]
    },
    {
        enunciado: "Quais elementos são comuns na cultura africana ao integrar o uso de ervas medicinais e o consumo de drogas tradicionais? 
        alternativas: [
            {
            texto: "Rituais de cura que utilizam ervas medicinais e substâncias tradicionais para equilibrar o corpo e a mente. 
            afirmacao: "verdadeira"
            },
            {
            texto: "Práticas de consumo de drogas ilícitas sem relação com a medicina tradicional ou rituais espirituais. 
            afirmacao: "verdadeira" 
            },
        ]
    },
    {
        enunciado: "Quais aspectos da cultura africana envolvem o uso de ervas medicinais e também o consumo de substâncias que podem ser consideradas drogas? 
        alternativas: [
            {
            texto: " Festivais e rituais que utilizam ervas medicinais e substâncias psicoativas para promover a conexão espiritual 
            afirmacao: "verdadeira" 
            },
            {
            texto: "Uso de remédios naturais para tratamentos de saúde, sem qualquer uso de drogas ou substâncias psicoativas. 
            afirmacao: "verdadeira"
            },
        ]
    },

];//criação das variáveis atual(que percorrerá os itens da lista de perguntas)
// perguntaAtual(que guardará a pergunta atual que será interagida)
//historiaFinal(que inicia vazia e depois guardará os textos da resposta selecionada)

let atual = 0;
let perguntaAtual;
let historiaFinal = "";//funcao que mostrará cada pergunta até que apareça encerre a lista e mostrará o resumo da I.A.

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
//execução da função que mostrará as alternativas
    mostraAlternativa();
}//funcao que mostrará as alternativas do objeto selecionado

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
//execução da função SETA => que após o evento de clique selecionada a resposta da alternativa
        botaoAlternativa.addEventListener("click",()=>respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa);
   
}
}//função que junta todas as afirmações das alternativas clicadas.

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
//execução da função que mostra a pergunta
    mostraPergunta();

}//função que mostrará o resultado final 

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}//execução da função que mostrará a pergunta e suas alternativas

mostraPergunta();