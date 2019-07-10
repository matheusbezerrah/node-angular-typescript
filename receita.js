function saudacao(receita) {
    return 'Receita: ' + receita.descricao + ' no valor de R$' + receita.valor;
}
var receita = { descricao: "Salário", valor: 2500 };
document.body.innerHTML = saudacao(receita);
console.log(saudacao(receita));