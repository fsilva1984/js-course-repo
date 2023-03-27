

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};


function makeList({failure}) {
  let el = [];

  for (let i = 0; i < failure.length; i++) {

    el.push(`<li class="text-warning">${failure[i]}</li>`)
  }
  return el
  
}

const failuresList = makeList(result);

console.log(failuresList);

const exit = document.querySelector(".exit")

exit.innerHTML = failuresList;




