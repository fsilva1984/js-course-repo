let str = "The quick brown fox jumped over the lazy dog"

let getSpace = /(\s)/gm


let lenSpace = str.match(getSpace)

console.log(lenSpace)