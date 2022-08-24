
let inputadultos=document.getElementById("adultos");
let inputcriancas=document.getElementById("criancas");
let inputduracao=document.getElementById("duracao");
let resultado=document.getElementById("resultado");
function calcular() {
    console.log("calculando....");

    let adultos=inputadultos.value;
    let criancas=inputcriancas.value;
    let duracao=inputduracao.value;
    
    let qtdTotalDeCarne=carnePP(duracao)*adultos+(carnePP(duracao)/2*criancas)
    let qtdTotalDecerveja=cervejaPP(duracao)*adultos
    let qtdTotalDebebidas=bebidasPP(duracao)*adultos+(bebidasPP(duracao)/2*criancas)

    resultado.innerHTML=` <p>${qtdTotalDeCarne/1000}KG de carne</p>`
    resultado.innerHTML+=` <p>${qtdTotalDecerveja/1000}L de cerveja</p>`
    resultado.innerHTML+=` <p>${qtdTotalDebebidas/1000}L de bebidas sem alcool</p>`

function carnePP(duracao){
    if(duracao>=6){
        return 650
    }
    else{
        return 400       
    }
}
function cervejaPP(duracao){ 
    if(duracao>=6){
        return 2000
    }
    else{
        return 1200
    }
}
function bebidasPP(duracao){ 
    if(duracao>=6){
        return 1500
    }
    else{
        return 1000
    }    }
}
