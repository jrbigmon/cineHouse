module.exports = function buscarFilme(lista, codigo){
    const filmeProcurado = lista.find(function(filme){
        return filme.codigo == codigo
    })
    return filmeProcurado != undefined ? filmeProcurado : "Filme não encontrado!";
} // buscando filme através do find() que só pode receber apenas um parametro dentro de sua propria função


