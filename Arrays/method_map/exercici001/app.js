/*


const log = console.log

const lessNumber = [
  {key: 23},
  {key: 45},
  {key: 16},
  {key: 30}
]

const doubleNumber = lessNumber.map(item => item.key * 2)



//log(doubleNumber, lessNumber)



const forSales = [
  {fogao: "Dako", price: 580},
  {luminaria: "Mega Luz", price: 892},
  {tapete: "Camunami", price: 733},
  {tv: "Smart TV", price: 3890},
  {smartphone: "Poco", price: 2325}
]



const showPrice = forSales.map((item, index) => {
 let { fogao, price } = item

 if (price > 1000) {
  
  return `${price}`
 }

 
})

//log(showPrice)




*/




//const inputUser = document.querySelector("#user").value
//const bt = document.querySelector("button")
//const exit = document.querySelector(".exit")


function geladeira() {
  return [

    {geladeira: "brastemp",price: 3270},
    {geladeira: "eletrolux",price: 2200},
    {geladeira: "ge",price: 3000},
    {geladeira: "lg",price: 4780},

  ].map(item => {

    console.log(`${item.geladeira} R$ ${item.price}`);
  })
}





function fogao() {

  return [

    {fogao: "Dako",price: 1300},
    {fogao: "Continental",price: 698},
    {fogao: "Esmaral",price: 800},
    {fogao: "Prime",price: 790},
    {fogao: "Brastemp",price: 1900},

  ].map(item => {
    console.log(`${item.fogao} R$ ${item.price}`)
  })
}




function smarttv() {
  return [   
    {smarttv: "sansung",price: 2900},
    {smarttv: "lg",price: 1600},
    {smarttv: "philco",price: 1950},
    {smarttv: "sanio",price: 2700},
    {smarttv: "cce",price: 1800},

  ].map(item => {

    console.log(`${item.smarttv} R$ ${item.price}`);
  })
}




function smartphone() {
  return [
    {phone: "poco",price: 2800},
    {phone: "moto one",price: 1750},
    {phone: "galaxy note",price: 1970},
    {phone: "asus",price: 2300},
    {phone: "lenovo",price: 1800},

  ].map(item => {

    console.log(`${item.phone} R$ ${item.price}`);
  })

}
 


/*
lembrete ** o switch case e um mutlipla escolhas
e nao um  if else
*/

function getProduct(param) {


  switch (param) {

    case 'smartphone':
      smartphone()
    break;

    case 'smarttv':
      smarttv()
    break;

    case 'fogao':
      fogao()
    break;

    case 'geladeira':
      geladeira()
    break;
  }
}

getProduct('geladeira')




