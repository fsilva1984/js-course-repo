function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

console.log(capitalize('teste')); // Teste

console.log(capitalize('olá Mundo')); // Olá Mundo