// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


function viewData(url) {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {

    if (request.readyState === 4 && request.status === 200) {

      console.log(request.statusText);
      console.log(request.getAllResponseHeaders());
      console.log(request.responseURL);
      console.log(JSON.parse(request.response));

    } else {
      console.log(request.status);
    }

  });
  request.open('GET', url);
  request.send();
}
//viewData('https://pokeapi.co/api/v2/pokemon/ditto')


const showResponse = (param) => {
  const responselist = document.querySelector('.responselist');

  responselist.parentElement.style.border = '1px solid red';
  responselist.parentElement.style.width = '80%';
  responselist.parentElement.style.minHeight = '70px';

  if (param > 300 && param < 600) {
    responselist.textContent = param;

  } else {

    responselist.textContent = param.name;
  }
};

function getData(url) {

  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    const responseOk = request.readyState === 4 && request.status === 200;

    if (responseOk) {
      showResponse(JSON.parse(request.responseText))

    } else {
      showResponse(request.status)
    }

  });

  request.open('GET', url);
  request.send();
}

getData('https://pokeapi.co/api/v2/pokemon/ditto');

