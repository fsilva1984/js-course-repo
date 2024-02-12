

// Função request
const getData = async url => {

    try {

        /*
            O try vai tentar execultar todo o codigo
            que esta aqui dentro e caso aja algum erro
            sera tradado no catch com uma menssagem 
            personalizada.
        */
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Desculpe dados  não encontradaos');
        }   

        return response.json();

    } catch (error) {// Aqui recebe os erros

        return error.message;
    }


}


getData('https://jsonplaceholder.typicode.com/usersR')
    .then(data => console.log(data));
