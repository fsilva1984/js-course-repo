

const fill = document.querySelector("#n1");

function print() {
  const pattern = /(\d{3})(\d{3})(\d{3})(\d{2})/;
  const present = fill.value;
  fill.value = present.replace(pattern, "$1.$2.$3-$4");
};


fill.addEventListener("keyup", print);