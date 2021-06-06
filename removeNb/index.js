function removeNb (n) {

  let summ = n * (1 + n) / 2;

  let res = [];

  for (let i = 1; i <= n; ++i){
    let j = (summ-i)/(i+1);
    if (j == Math.ceil(j) && j <= n + 1 && i != j){
      res.push([i , j]);
    }
  }  

  return res

}

console.log(removeNb(26));