const humanReadable = (s) => {
  let hours = toSecLength(Math.floor(s / 60 / 60))
  let minutes = toSecLength(Math.floor(s / 60) - hours * 60)
  let seconds = toSecLength(s - minutes * 60 - hours * 60 * 60)
  return hours + ":" + minutes + ":" + seconds
}
const toSecLength = (el) => {
  if (String(el).length === 1) return "0" + el
  return el
}
console.log(humanReadable(5))
