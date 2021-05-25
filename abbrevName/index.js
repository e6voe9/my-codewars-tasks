const abbrevName = (str) => {
  let arr = str.split(" ")
  const firstName = arr[0][0] + "."
  const lastName = arr[1][0]
  return firstName.toUpperCase() + lastName.toUpperCase()
}

console.log(abbrevName("mark tven"))
