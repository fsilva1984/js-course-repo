(function () {

  const tbody = document.querySelector("#tbody");
  const input = document.querySelector("#input");

  const ford = [
    mustang = {
      fac: "Ford",
      mod: "Mustang",
      age: "1987"
    },
    eco = {
      fac: "Ford",
      mod: "Eco Sport",
      age: "2018",
    },
    fusion = {
      fac: "Ford",
      mod: "Fusion",
      age: "2012"
    },
  ];
  const chevrolet = [
    camaro = {
      fac: "Chevrolet",
      mod: "Camaro",
      age: "1967"
    },
    corsa = {
      fac: "Chevrolet",
      mod: "Corsa",
      age: "1998"
    },
    onix = {
      fac: "Chevrolet",
      mod: "Onix",
      age: "2021"
    },
  ];
  const toyota = [
    Hcyte = {
      fac: "Toyota",
      mod: "Honda City",
      age: "2014"
    },
    corola = {
      fac: "Toyota",
      mod: "Corola",
      age: "2018",
    },
    SW4 = {
      fac: "Toyota",
      mod: "SW4",
      age: "2023",
    },
  
  ];
  const woksvagem = [
    Gol = {
      fac: "woksvagem",
      mod: "Gol",
      age: "1997"
    },
    Pollo = {
      fac: "woksvagem",
      mod: "Pollo",
      age: "1998"
    },

    Fox = {
      fac: "woksvagem",
      mod: "Fox",
      age: "2018"
    },

    Jetta = {
      fac: "woksvagem",
      mod: "Jetta",
      age: "2021"
    },
  
  ];

  


  function showCar(arr) {
    let count = 1;
    let data = "";

    for (let i = 0; i < arr.length; i++) {

      data += `
      <tr>
      <th scope="row"><span class="text-primary">${count}</span></th>
      <td>${arr[i].fac}</td>
      <td>${arr[i].mod}</td>
      <td>${arr[i].age}</td>
      </tr>`;

      count += 1;

    };

    tbody.innerHTML = data;

  };



  input.addEventListener("keyup", () => {
    const value = input.value.toLowerCase();

    switch (value) {
      case "ford":
        showCar(ford);
        break;
      
      case "chevrolet":
        showCar(chevrolet);
        break;
      
      case "toyota":
        showCar(toyota);
        break;
      
      case "woksvagem":
        showCar(woksvagem);
        break;
    
      default:
        tbody.innerHTML = `
      <tr>
      <th scope="row"><span class="text-primary">${"#"}</span></th>
      <td>${"****"}</td>
      <td>${"****"}</td>
      <td>${"****"}</td>
      </tr>`;
        break;
    }
  
  });

})();













