


const rootSQ = (function () {
  let result = 0;
  return function (x) {
    return result = x ** 0.5;
  };
})();

export { rootSQ };