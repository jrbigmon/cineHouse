module.exports = function listarFilmesEmCartaz(lista){
    var novaLista = [];
    for(let i = 0; i < lista.length; i++){
        if(lista[i].emCartaz == true){
            novaLista.push(lista[i])
        }
    }
        console.table(novaLista)
}