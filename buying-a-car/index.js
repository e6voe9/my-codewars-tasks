function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let res = [];
  let countOfMonths = 0;
  let c = 0;
  let m = 0;
  let money = startPriceOld;
  let start = startPriceNew;

  if (money >= start){
    res.push(countOfMonths);
    res.push(money - start);
    return res
  }

  while (money < startPriceNew){
    if (m === 2) {
      m = 0; 
      percentLossByMonth += 0.5;
    }
    if (c > 0){
      startPriceOld *= 1 - percentLossByMonth / 100;
      startPriceNew *= 1 - percentLossByMonth / 100;
      ++countOfMonths;
    }
    
    money = startPriceOld + savingperMonth * countOfMonths;
    
    ++m;
    ++c;
  }
  res.push(countOfMonths);
  res.push(Math.round(money - startPriceNew));

  return res
}

console.log(nbMonths(2000, 8000, 1000, 1.5));