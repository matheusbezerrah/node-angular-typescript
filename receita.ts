interface Receita {
    descricao:String;
    valor:Number;
}

function saudacao(receita:Receita){
    return 'Receita: ' + receita.descricao + ' no valor de R$' + receita.valor;
}

let receita = {descricao : "Salário", valor : 2500};

document.body.innerHTML = saudacao(receita);
console.log(saudacao(receita));