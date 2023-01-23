

  const month = {
    jan: 'Janeiro',
    fev: 'Fevereiro',
    mar: 'Março',
    abr: 'Abril',
    mai: 'Maio',
    jun: 'Junho',
    jul: 'Julho',
    ago: 'Agosto',
    set: 'setembro',
    out: 'Outubro',
    nov: 'Novembro',
    dez: 'Desembro'
  }

  const {
    jan,
    fev,
    mar,
    abr,
    mai,
    jun,
    jul,
    ago,
    set,
    out,
    nov,
    dez } = month



setTimeout(date, 1500)


function date() {

  let date = new Date()
  let d = date.getDay()
  let m = date.getMonth()
  let y = date.getFullYear()

  let currentMonth

  switch (m) {
    case 0:
      currentMonth = jan
      break;
  
    case 1:
      currentMonth = fev
      break;

    case 2:
      currentMonth = mar
      break;

    case 3:
      currentMonth = abr
      break;

    case 4:
      currentMonth = mai
      break;

    case 5:
      currentMonth = jun
      break;

    case 6:
      currentMonth = jul
      break;

    case 7:
      currentMonth = ago
      break;


    case 8:
      currentMonth = set
      break;

    case 9:
      currentMonth = out
      break;

    case 10:
      currentMonth = nov
      break;

    case 11:
      currentMonth = dez
      break;
  }
    


  document.getElementById("date").textContent = `${d} ${ currentMonth } ${y}`

}

















