
const main = [

  [12, 34, 76],
  [24, 09],
  [56, 15, 34],
  [17, 72, 13]
]

const sub = [...main]
const total = sub.map(item => {

 return item.reduce((val, idx) => val + idx)
})

console.log(total);


for (let i = 0; i < sub.length; i++) {
 let sum = sub[i].reduce((val, idx) => val + idx)
 
  //console.log(sum);
}


