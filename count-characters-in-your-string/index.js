const count = (str) => {
  const uniqueLetters = [...new Set(str)]
  let resObj = {}

  for (let i = 0; i < uniqueLetters.length; ++i) {
    const reg = new RegExp(uniqueLetters[i], "g")
    resObj[uniqueLetters[i]] = str.match(reg).length
  }
  return resObj
}

console.log(count("aba"))
