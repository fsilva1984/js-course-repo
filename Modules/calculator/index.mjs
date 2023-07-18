
const index = (function () {

  // Display
  const disp = document.querySelector("#disp")

  const point = document.querySelector("#poit");
  const equal = document.querySelector("#equal");

  const btn = document.querySelectorAll(".btn");


  //desabilita letras ou simbulos fora da matematica
  disp.addEventListener("keypress", e => {
    console.log(e.key);
    const regex = /([\d{1,}])|([%*√\-\/\+.]{1,})/;
    const bool = regex.test(e.key);
    if (bool || e.key == "Enter") {
      disp.textContent = e.key;
    } else {
      disp.value = "Not a Number ";
      setTimeout(() => { disp.value = ""; }, 600);
    };
  });

  /*
  
  Falta defnir funcoes que faca as operacoes aritimeticas
  
  */


  function fnBtn() {

    btn.forEach(i => {
      i.addEventListener("click", () => {
        const regex = /[%*√\-\/\+.]/;
        const bool = regex.test(i.textContent);
      })
    })
  }
  fnBtn()

})();

export { index };





/*

  btn.forEach(i => {//desabilita clickes fora dos botoes

    i.addEventListener("click", e => {
      let evnt = e.target;
      const regex = /([=]{1,})/;

      const bool = regex.test(evnt.textContent);

      if (!bool) {
        disp.value += evnt.textContent;
      }
      return
    });
  });


[
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    zero
  ].forEach(i => {
    
    i.addEventListener("click", (e) => {
      console.log(i.textContent);
      i.textContent
    });

    console.log(n);
  });



 // Botoes
  const sum = document.querySelector("#sum");
  const sub = document.querySelector("#sub");
  const div = document.querySelector("#div");
  const mult = document.querySelector("#mult");
  const rootSQ = document.querySelector("#rootSQ");
  const percent = document.querySelector("#percent");

  const one = document.querySelector("#one");
  const two = document.querySelector("#two");
  const three = document.querySelector("#three");
  const four = document.querySelector("#four");
  const five = document.querySelector("#five");
  const six = document.querySelector("#six");
  const seven = document.querySelector("#seven");
  const eight = document.querySelector("#eight");
  const nine = document.querySelector("#nine");
  const zero = document.querySelector("#zero");




*/


