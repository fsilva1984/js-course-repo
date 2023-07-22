import { percent } from "./percentage.mjs";
import { rootSQ } from "./rootSQ.mjs";
(() => {

  // Display
  const disp = document.querySelector("#disp")
  //Todos os botoes da calculadora
  const btn = document.querySelectorAll(".btn");

  /*
    Aqui evitaremos que seja colado comandos
    no input de nossa calculadora
    tanto usando o  Ctr + v ou botao esquerdo
    do mouse.
  */
  disp.addEventListener("paste", e => {
    if (e.preventDefault()) {
      return
    }


    /*
      TECLADO FISICO
    desabilita letras ou simbulos fora da matematica
    */
    disp.addEventListener("keydown", e => {
      const regex = /([\d{1,}])|([%*√\-\/\+.]{1,})/;
      console.log(e.key);
      const bool = regex.test(e.key);
      if (
        bool || e.key == "Enter"
        || e.key == "Shift"
        || e.key == "Backspace"
      ) {
        disp.textContent = e.key;
      } else {
        setTimeout(() => { disp.value = ""; }, 300);
      };

    });
  });

  //botoes da calculadora
  btn.forEach((bt) => {

    bt.addEventListener("click", (e) => {

      if (
        /*  Se o bt clicado nao e nenhum desses,
         entao jogue o seu conteudo de texto
         no display.  */
        e.target.textContent != "="
        && e.target.textContent != "√"
        && e.target.textContent != "%"
        && e.target.textContent != "<<"
      ) {
        disp.value += e.target.textContent;
      };

      /*
        Aqui evita que o javascript tente
        executar algo que nao seja uma 
        operacao matematica
      */
      if (disp.value.length == 0) {
        return
      } else {

        if (
          e.target.textContent == "="
          && e.target.textContent != "%"
          && e.target.textContent != "√"
          && e.target.textContent != "<<"
        ) {
          disp.value = eval(disp.value)
        };

      };

      if (
        e.target.textContent == "√"
        && e.target.textContent != "%"
        && e.target.textContent != "="
        && e.target.textContent != "<<"
      ) {
        disp.value = rootSQ(disp.value);
      };

      if (disp.value.length == 0) {
        return
      } else {

        if (
          e.target.textContent == "%"
          && e.target.textContent != "√"
          && e.target.textContent != "="
          && e.target.textContent != "<<"
        ) {
          disp.value = percent(eval(disp.value));
        };

      };

    });

  });

  //  bt zera display
  const ac = document.querySelector("#ac")
  ac.addEventListener("click", () => {
    disp.value = disp.value = "";
  });

  // bt deleta um numero por veis
  document.getElementById("back")
    .addEventListener("click", (e) => {
      let result = disp.value;
      disp.value = result.substring(0, result.length - 1);
    })

})();

