// async function getUsers(url) {
//     const response = await fetch(url);
//     return await response.json();
// }


// função asincrona
async function getUsers(url) {
    // await aguarda a resposta da requisição ao endpoint
    const response = await fetch(url);
    /*
        O await aguarda a resposta vir e ser tranformada
        em um objeto javascript logo apos e retornada
        como uma promise
    */ 
    return await response.json();
}


getUsers('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        let index = 0;
        data.forEach(({ name, address: { city } }) => {

            console.log(`${index} - ${name} ${city}`);
            index++;
        });

    })
    .catch(error => console.error(error));









// getUsers('https://jsonplaceholder.typicode.com/users')
//     .then(data => {
//         const { name, address: { city } } = data[0];
//         console.log(`${name} ${city}`)
//     })
//     .catch(error => console.error(error));