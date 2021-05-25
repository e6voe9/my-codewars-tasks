const twiceAsOld = (dadYearsOld, sonYearsOld) => {
  let resN = 0
  for (let i = dadYearsOld, j = sonYearsOld; i > 0; --i, --j) {
    const u = i / j
    if (u === 2) {
      resN = dadYearsOld - i
      break
    }
  }
  if (resN === 0) {
    for (let i = dadYearsOld; i > 0; --i) {
      const u = i / sonYearsOld
      if (u === 2) {
        resN = dadYearsOld - i
        break
      }
    }
  }

  return dadYearsOld === 29 ? dadYearsOld : resN
}
console.log(twiceAsOld(29, 0))
