const quarterOf = (m) => {
  if (m <= 3) return 1
  if (m <= 6) return 2
  if (m <= 9) return 3
  if (m <= 12) return 4
}

console.log(quarterOf(10))
