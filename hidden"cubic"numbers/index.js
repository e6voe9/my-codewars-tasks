function isSumOfCubes(s){
  let arr = [].concat(...s.replace(/[^0-9]/gi,' ').replace(/\s+/gi,' ').trim().split` `.map(v=>{
    let arr = []
    for (let i=0;i<v.length;i+=3){
      arr.push(v.slice(i,i+3))
    }
    return arr
  }))
  let final = arr.filter(v=>v*1===(v.split``.reduce((a,b)=>a+(b*b*b),0))).map(v=>v*1)
  return final.length?final.join` `+' '+final.reduce((a,b)=>a+b,0)+' '+'Lucky':'Unlucky'
}
isSumOfCubes(`1 0 Lucky
abc454Once upon1a time75xyz153508a time13a time371159a time395xyz153173...197Lucky0`);