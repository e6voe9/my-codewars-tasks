const getRealFloor = (fl) => {
  if (fl <= 0) return fl
  if (fl < 13) return --fl
  return fl - 2
}
console.log(getRealFloor(14))
