const httpExpress = require('express');
const http = httpExpress();

http.get("/",function(req, res){
    res.send("PAGINA HOME: " + __dirname + "/index.html");
});

http.get("/receitas/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

http.get("/despesas/:descricao",function(req, res){
    var despesa = req.params;
    res.send("<h2> Despesas </h2>" + despesa.descricao);
});

http.listen(8091,function(){
    console.log('Servidor Iniciado em localhost:8091.');
});

// CÓDIGOS UTILIZADOS
/* PARÂMETROS
http.get("/receitas/:descricao",function(req, res){
    var receita = req.params;
    res.send("<h2> Receitas </h2>" + receita.descricao);
});

http.get("/despesas/:descricao",function(req, res){
    var despesa = req.params;
    res.send("<h2> Despesas </h2>" + despesa.descricao);
});
*/