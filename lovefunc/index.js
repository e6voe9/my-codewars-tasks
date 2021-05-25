const lovefunc = (a, b) => {
  if ((a % 2 === 0 && b % 2 !== 0) || (b % 2 === 0 && a % 2 !== 0)) {
    return true
  }
  return false
}

console.log(lovefunc(4, 4))
