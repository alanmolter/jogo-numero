
const menorValor = 1;
const maiorValor = 100;

const elementoMenor = document.getElementById('menor-valor');
elementoMenor.innerHTML = menorValor;

const elementoMaior = document.getElementById('maior-valor');
elementoMaior.innerHTML = maiorValor;



const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1) ;
}

console.log(numeroSecreto);