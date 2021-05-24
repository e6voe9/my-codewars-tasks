const minPermutation = (n) => {
  const isNeg = n < 0
  if (isNeg) n = n * -1

  let sortedArray = n.toString().split("").sort()
  const minN = sortedArray.find((e) => Number(e) > 0)
  for (let i = 0; i < sortedArray.length; ++i) {
    if (sortedArray[i] > 0) {
      sortedArray.splice(sortedArray.indexOf(minN), 1)
      break
    }
  }
  sortedArray.unshift(minN)
  return isNeg
    ? Number("-" + Number(sortedArray.join("")))
    : Number(sortedArray.join(""))
}
console.log(minPermutation(-335568))
