export const isGameOver = (currVals) => {
  const rightanddowncheckindexes = [0,1,2,4,5,6,8,9,10]
  const downcheckindexes = [3,7,11]
  const rightcheckindexes = [12,13,14]

  let gameOverFlag = true;

  rightanddowncheckindexes.forEach(index => {
    if (currVals[index] === currVals[index + 1] || currVals[index] === currVals[index + 4]) {
      gameOverFlag = false;
    }
  })

  downcheckindexes.forEach(index => {
    if (currVals[index] === currVals[index + 4]) {
      gameOverFlag = false;
    }
  })

  rightcheckindexes.forEach(index => {
    if (currVals[index] === currVals[index + 1]) {
      gameOverFlag = false;
    }
  })

  return gameOverFlag
}