


const mult = (function () { 
  let result = 0;
  return function (x, y) {
    return result = x * y;
  };
})();

export { mult };