


const getData = url => new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        const requestSuccess = request.readyState === 4 && request.status === 200;

        const requestStates = request.readyState === 4;

        if (requestSuccess) {
            const data = request.responseText;
            resolve(JSON.parse(data))
        }

        if (requestStates) {
            reject('Ops! Algo deu errado')
        }
    })
    request.open('GET', url);
    request.send();
})

    getData('https://api.placeholderjson.dev/todo/1')
    .then(data => {
        const { id, title, done } = data[0];
        document.querySelector('.reciveData01').innerHTML = `
            <ul>
                <li>id: ${id}</li>
                <li>title: ${title}</li>
                <li>done: ${done}</li>
        </ul>
        `;
        return getData('https://api.placeholderjson.dev/todo/2')
    })
    .then(data => {
        const { id, title, done } = data[0];
        document.querySelector('.reciveData02').innerHTML = `
            <ul>
                <li>id: ${id}</li>
                <li>title: ${title}</li>
                <li>done: ${done}</li>
        </ul>
        `;

        return getData('https://api.placeholderjson.dev/todo/3')
    })
    .then(data => {
        const { id, title, done } = data[0];
        document.querySelector('.reciveData03').innerHTML = `
            <ul>
                <li>id: ${id}</li>
                <li>title: ${title}</li>
                <li>done: ${done}</li>
        </ul>
        `;
        return getData('https://api.placeholderjson.dev/todo/4')
    })
    .then(data => {
        const { id, title, done } = data[0];
        document.querySelector('.reciveData04').innerHTML = `
            <ul>
                <li>id: ${id}</li>
                <li>title: ${title}</li>
                <li>done: ${done}</li>
        </ul>
        `;
    })
    .catch(err => { 
        document.querySelector('.erro').innerHTML = `<h3>${err}</h3>`
    })



