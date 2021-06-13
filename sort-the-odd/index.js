function sortArray(array) {
  const evenObj = {};
  const oddArr = [];
  let res = [];
  for (let i = 0; i < array.length; ++i){
    if (array[i] % 2 === 0){
      evenObj[i] = array[i];
    } else {
      oddArr.push(array[i]);
    }
  }
  oddArr.sort((a,b) => a - b);
  let n = 0;
  for (let i = 0; i < array.length; ++i){
    if (evenObj[i] == null){
      res.push(oddArr[n]);
      ++n;
    } else {
      res.push(evenObj[i]);
    }
  }
  return res
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));