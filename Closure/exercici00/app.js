(function () {

  
  const fn = () => "Codigo encapsulado!";

  const obj = {
    scop: null,
    arr: ['123'],
    print: function (param) {
      console.log(param);
    },
  };

  obj.print(fn());
})();