const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

function add(arr, bookName) {
  const arrBook = [].concat(arr);
  arrBook.push(bookName);
  return arrBook;
}

function remove(arr, bookName) {
  const arrBook = [].concat(arr);
  const book_index = arrBook.indexOf(bookName);
  arrBook.splice(book_index, 1);
  return arrBook;
}

console.log(add(bookList, "Pense Python"));
console.log();
console.log(remove(bookList, "Philosophiæ Naturalis Principia Mathematica"));