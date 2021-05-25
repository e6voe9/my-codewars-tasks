const multiTable = (num) => {
  let res = []
  for (let i = 1; i <= 10; ++i) {
    const formattedItem = `${i} * ${num} = ${i * num}\n`
    res.push(formattedItem)
  }
  return res.join("").trim()
}
console.log(multiTable(5))
