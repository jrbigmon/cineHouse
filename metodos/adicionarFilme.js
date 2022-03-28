module.exports = function adicionarFilme (lista, titulo, duracaoMin, atores, anoDeLancamento, emCartaz){
    //inseri na lista o seguinte objeto que será passado como parametro
    lista.push({
        codigo: lista.length+1, // o codigo vai receber diretamente o parametro do tamanho da lista + 1
        titulo,
        duracaoMin,
        atores,   
        anoDeLancamento,
        emCartaz
    }); 
    return lista;
} // adiciona filmes a lista dada
