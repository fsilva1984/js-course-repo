

const body = document.querySelector('body');
body.style.background = '#32363a';
body.style.color = '#f0f1f1';


const div = document.createElement('div');
div.style.border = '1px solid green';
div.style.minHeight = '60px';
div.style.padding = '8px';
div.style.fontSize = '1.5rem';


body.appendChild(div);




const div2 = document.createElement('div');
div2.style.border = '1px solid red';
div2.style.minHeight = '50px';
div2.style.padding = '8px';
div2.style.fontSize = '1.5rem';
body.insertAdjacentElement('beforeend', div2);




const getData = (data, err) => {
    const filterData = JSON.parse(data);
    const { done, id, title} = filterData[0];
    
    div.textContent = `${done} ${id} ${title}`
    div2.textContent = err;
};

function requestFn(url) {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        const finalState = request.readyState;
        const goodStatus = request.status >= 200 && request.status <= 299;
        const ok = finalState === 4 && goodStatus === true;

        if (ok) {
            getData(request.response, null);
            return;

        } else {
            getData(null, request.status);
        }
    });
    request.open('GET', url);
    request.send();
}




requestFn('https://api.placeholderjson.dev/todo/1');