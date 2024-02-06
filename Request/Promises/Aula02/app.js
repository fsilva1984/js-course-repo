
const boxSuccess = document.querySelector('.boxSuccess');
const boxFailure = document.querySelector('.boxFailure');

// Aqui temos uma funcao que retorna uma promise
const getData = url => new Promise((resolve, reject) => {

    /*
        dentro da promise chamamos a funcao contrutora
        do request para a fazer a consulta no servidor
    */
    const request = new XMLHttpRequest();

    // aqui escutaremos as mudancas na realizacao do request
    request.addEventListener('readystatechange', () => {


        const succesStatus = request.readyState === 4 && request.status === 200;
        const succesState = request.readyState === 4;

        if (succesStatus) {
            const data = JSON.parse(request.responseText);
            resolve(data);
        }

        if (succesState) {
            reject(request.status);
        }


    });

    request.open('GET', url);
    request.send();
});
getData('https://api.placeholderjson.dev/todo/1f')
    .then(data => {

        const { id, title, done } = data[0];

        boxSuccess.innerHTML = `
        <ul>
            <li>id: ${id}</li>
            <li>title: ${title}</li>
            <li>done: ${done}</li>
        </ul>
    `;
    })
    .catch(err => {
        console.error(err)
        boxFailure.textContent = 'Opa! algo deu errado'
    })



