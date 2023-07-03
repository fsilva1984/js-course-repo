
//scop in closure

const str = "String global!";

(function () { 

  const returnStr = () => { 
    console.log(str);
  };

  returnStr();
})();




