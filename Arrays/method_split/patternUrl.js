
const txt = "A Mind   Needs Books Like A Sword Needs A Whetstone";



function urlSlug(title) {

  const pattenrUrl = title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");

  return pattenrUrl;
}

console.log(urlSlug(txt));


/*
***FALTA UMA SOLUÇÃO PARA TROCAR OS ESPAÇOS POR IFEN**

function urlSlug(title) {
  
  const spaces = new RegExp(/\s+/);
  let array = [];
  let wold = [];

  for (let i = 0; i < title.length; i++) {
    if (title[i] != " ") {
      wold += title[i];
      array.push(wold)
    };
  }
  return array;
}

console.log(urlSlug(txt));

*/