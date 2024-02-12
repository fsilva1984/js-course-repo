


try {
    /*
        Todo o codigo aqui dentro o try tentara executalo 
        mas se tiver algum problema o erro sera lancado
        no catch
    */
    
    console.log(Ola);// variavel nao declarada

} catch (error) {// o erro sera recebido no parametro do catch

    if (error.name === 'ReferenceError') {
        // mensagem customisada
        console.log('Tivemos um problema mas ja estamos resolvendo');
    }
}
/*
    O Try Catch tratou o erro executando uma acao
    e o processo nao foi interrompido
*/
console.log('Hello');

