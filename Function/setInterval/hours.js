

setInterval(hours, 1000)


function hours() {

  let tz = new Date()
  let h = tz.getHours()
  let m = tz.getMinutes()
  let s = tz.getSeconds()

  function zero(x) {

    if (x < 10) {
      x = '0' + x
      return x
    } else {
      return x
    }
  }
 
  
  h = zero(h)
  m = zero(m)
  s = zero(s)
  
  document.getElementById("time").textContent = h + ":" + m + ":" + s

}

