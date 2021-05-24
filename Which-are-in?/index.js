let a1 = ["arp", "live", "strong"]
let a2 = ["lively", "alive", "harp", "sharp"]

function myFunc(a, b) {
  let res = []
  b.forEach((element) => {
    a.forEach((el) => {
      element.includes(el) ? res.push(el) : null
    })
  })
  return [...new Set(res)].sort()
}

console.log(myFunc(a1, a2))
