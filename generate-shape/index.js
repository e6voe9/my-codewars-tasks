const generateShape = (int) => {
  let str = ""
  for (let i = 0; i < int; ++i) {
    for (let j = 0; j < int; ++j) {
      str += "+"
    }
    if (i !== int - 1) str += "\n"
  }
  return str
}

console.log(generateShape(10))
