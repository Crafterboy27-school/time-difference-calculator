setInterval(async () => {
  var from = /^(\d+):(\d+) ?(.*)/g.exec(document.getElementById("from").value)
  if (!from) return
  if (["PM"].includes(from[3])) {
    from[1] = Number(from[1]) + 12
  }
  from[4] = Number(from[2]) + (from[1] * 60)
  console.log(from)

  var to = /^(\d+):(\d+) ?(.*)/g.exec(document.getElementById("to").value)
  if (!to) return
  if (to[3] == "PM") {
    to[1] = Number(to[1]) + 12
  }
  to[4] = Number(to[2]) + (to[1] * 60)
  console.log(to)

  document.getElementById("result").innerHTML = "Difference: " + Math.abs((to[4] - from[4])) + " minutes"
})