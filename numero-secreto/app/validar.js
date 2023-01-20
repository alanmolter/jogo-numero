function verificaChute(chute){

    const numero = +chute;
   
    verificaPalavra(numero);

    verificaRange(numero);

    if(numero === numeroSecreto){
        document.body.innerHTML = `<h2>Voce acertou!!!</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>
        <button id="voltar" onclick="location.reload()">Voltar</button>`;
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-arrow-down-long"></i> </div>`
    }else{
        elementoChute.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-arrow-up-long"></i> </div>`
    }



}


function verificaPalavra(numero) {
    if (Number.isNaN(numero)) {
        alert('FALE um número!')
        elementoChute.innerHTML += '<div>Valor invalido</div>';
    }

    return
}


function verificaRange(numero){
    
    if(numero > maiorValor || numero < menorValor){
        alert('FALE um número dentro do intervalo de 1 a 100!');
        elementoChute.innerHTML += '<div>Valor fora do intervalo de 1 a 100</div>';
    }

    return

}



