

setInterval(() => { 


  const tz = new Date()
  const h = tz.getHours()
  const m = tz.getMinutes()
  const s = tz.getSeconds()


 
  const time = document.getElementById("time")

  function zero(x) {
    x = Number(x)
    if (x < 10) {
      return `0${x}`
    }
  }

  time.innerHTML = `${h}:${m}:${s}`


},1000)
