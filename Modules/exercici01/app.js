


const logNames = (arr, el) => {
  let element = '';
  for (let i = 0; i < arr.length; i++) {

    element += `<li>${arr[i]}</li>`
  }
  console.log(element);

  el.innerHTML = element
}


export { logNames };