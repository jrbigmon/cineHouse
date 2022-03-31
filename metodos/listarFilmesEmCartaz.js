module.exports = function listarFilmesEmCartaz(lista, sit){
    let lista2 = lista.filter(function(valor){
        return valor.emCartaz == sit
    })
    return lista2
    // var novaLista = [];
    // for(let i = 0; i < lista.length; i++){
    //     if(lista[i].emCartaz == true){
    //         novaLista.push(lista[i])
    //     }
    // }
    //     console.table(novaLista)
}
