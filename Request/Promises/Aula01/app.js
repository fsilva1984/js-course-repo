

const getData = () => {

    return new Promise((resolve, reject) => {
        //resolve('Dados recebidos');
        reject('Aconteceu algum erro');
    });

}

getData()
    .then(value => console.log(value))
    .catch(err => console.error(err))



