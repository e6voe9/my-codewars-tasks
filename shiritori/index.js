const shiritori = (w) => {
  console.log(w)
  if (w.length === 0) return []
  let res = []
  let lastLetter = w[0][0]
  for (let i = 0; i < w.length; ++i) {
    if (w[i] !== "" && w[i][0] === lastLetter) {
      res.push(w[i])
      lastLetter = w[i][w[i].length - 1]
    } else {
      return res
    }
  }
  return res
}

console.log(
  shiritori(["dog", "goose", "tiger", "cat", "elephant", "rhino", "orc"])
)
