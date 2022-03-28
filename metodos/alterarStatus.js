module.exports = function alterarStatus(lista, codigo){
    let sit = lista[codigo - 1]; // sit recebe codigo inserido -1 para dar a posição na array
    console.table(sit);
    console.log('-'.repeat(37)); // criar 20 traços para separação
    sit.emCartaz == true ? sit.emCartaz = false : sit.emCartaz = true;
    console.table(sit)
}// altera o status do cartaz do filme em específico
