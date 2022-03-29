function filmesLongaDuracao(lista, time){
    let item = lista.filter(filme => filme.duracaoMin >= time)
    return item;
}
module.exports = filmesLongaDuracao;