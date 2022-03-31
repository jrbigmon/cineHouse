const catalogo = require('./dataBase/catalogo'); // busca os dados do modulo exportado
const catalogo_1 = require('./dataBase/catalogo_1.json'); // busca o arquivo.json // no file.json não há a necessidade de exportar
const adicionarFilme = require('./metodos/adicionarFilme');
const buscarFilme = require('./metodos/buscarFilme');
const alterarStatus = require('./metodos/alterarStatus');
const listarTodosOsFilmes = require('./metodos/listarTodosOsFilmes');
const listarFilmesEmCartaz = require('./metodos/listarFilmesEmCartaz');
const filmesLongaDuracao = require('./metodos/filmesLongaDuracao');

// console.table(filmesLongaDuracao(catalogo_1, 130))
// console.table(adicionarFilme(catalogo_1, "Venon, carnificina", 100, "ManoBrown", 2020, false))
// alterarStatus(catalogo_1, 1)
// console.table(buscarFilme(catalogo_1, 2))
// console.table(listarFilmesEmCartaz(catalogo_1, false))
listarTodosOsFilmes(catalogo_1)


