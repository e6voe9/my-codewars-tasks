const repeatStr = (num, str) => {
  let res = ""
  for (let i = 0; i < num; ++i) {
    res += str
  }
  return res
}

console.log(repeatStr(3, "hey "))
