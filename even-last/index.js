const evenLast = (arr) => {
  if (arr.length === 0) return 0
  const evenNumbers = arr.filter((arrayElement, i) => i % 2 === 0)
  return evenNumbers.reduce((a, v) => a + v) * arr[arr.length - 1]
}

console.log(evenLast([2, 3, 4, 5]))
