export const addValueToBoard = (currArray) => {
  let emptyCells = currArray.filter((cell) => cell === "blank");
  const index = Math.floor(Math.random()*emptyCells.length);
  currArray[index] = getNextValue();
  return currArray;
}

const getNextValue = () => {
  const values = ["two","two","two","two","four"]
  const valueIndex = Math.floor(Math.random()*values.length);
  return values[valueIndex]
}