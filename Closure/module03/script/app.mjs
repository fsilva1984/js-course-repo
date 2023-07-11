
// app export

const fnModule = (function (elReceive) {
  const tbody = document.querySelector("#tbody");
  const article = [
    
    {
      img: "./img/py1.jpg",
      lang: "Portugues",
      nPage: "310",
      date: "18/05/1992"
    },
    
    {
      img: "./img/py2.jpg",
      lang: "Portugues",
      nPage: "310",
      date: "18/05/1992"
    },
    
    {
      img: "./img/py3.jpg",
      lang: "Portugues",
      nPage: "310",
      date: "18/05/1992"
    },
    
    {
      img: "./img/py4.jpg",
      lang: "Portugues",
      nPage: "310",
      date: "18/05/1992"
    },
    
    {
      img: "./img/py5.jpg",
      lang: "Portugues",
      nPage: "310",
      date: "18/05/1992"
    },
  ];

  (function() {

    let data = "";

    for (let i = 0; i < article.length; i++) {
      data += `<tr>
              <td>
              <img class="img-fluid" src="${article[i].img}">
              </td>
              <td>
                <p><strong>${article[i].lang}</strong></p>
              </td>
              <td>
                <p><strong>${article[i].nPage}</strong></p>
              </td>
              <td>
                <p><strong>${article[i].date}</strong></p>
              </td>
            </tr>`
    };

    console.log(article[0].lang);
    tbody.innerHTML = data;

  })();

  
})();


export { fnModule };