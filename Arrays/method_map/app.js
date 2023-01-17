
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



const promotions = [

  { product: "fogao Dako", price: 580},
  { product: "luminaria Mega Luz", price: 892},
  { product: "tapete persa", price: 733},
  { product: "Smart TV", price: 3890},
  { product: "smartphone Poco", price: 2325}

]



const promoDay = promotions.map(item => {

 let value = item.price
 let prod = item.product

 if ( value > 1200 ) {
    
  return {prod, value : value - Math.floor((15 * value) / 100)}
 
 }

})

log(promoDay)


