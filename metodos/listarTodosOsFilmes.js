module.exports = function listarTodosOsFilmes(lista){
    // for(let i = 0; i < lista.length; i++){
    //     console.log(i + 1 + ' - ' + lista[i].titulo)
    // }
    lista.forEach(listarItem = filme => console.table(filme))
}// lista todos os filmes dentro da lista
