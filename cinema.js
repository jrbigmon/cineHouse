var catalogo = require('./dataBase/catalogo'); // busca os dados do modulo exportado
var catalogo_1 = require('./dataBase/catalogo_1.json'); // busca o arquivo.json // no file.json não há a necessidade de exportar
var adicionarFilme = require('./metodos/adicionarFilme');
var buscarFilme = require('./metodos/buscarFilme');
var alterarStatus = require('./metodos/alterarStatus');
var listarTodosOsFilmes = require('./metodos/listarTodosOsFilmes');
var listarFilmesEmCartaz = require('./metodos/listarFilmesEmCartaz');

// console.table(adicionarFilme(catalogo_1, "Venon, carnificina", 100, "ManoBrown", 2020, false))
// console.log(alterarStatus(catalogo_1, 2))
// console.table(buscarFilme(catalogo_1, 1))
// console.table(listarFilmesEmCartaz(catalogo_1))
console.table(listarTodosOsFilmes(catalogo_1))


