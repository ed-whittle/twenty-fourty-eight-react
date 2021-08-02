export const handleArrowPress = (key, e, currentVals) => {
  switch(key) {
    case 'up':
      upArrowPress(currentVals);
      return currentVals;
    case 'down':
      downArrowPress(currentVals);
      return currentVals;
    case 'left':
      leftArrowPress(currentVals);
      return currentVals;
    case 'right':
      rightArrowPress(currentVals);
      return currentVals;
    default:
      return currentVals;                          
  }
}

const rightArrowPress = (currVals) => {
  console.log('Right Arrow Pressed')
}

const leftArrowPress = (currVals) => {
  console.log('Left Arrow Pressed')
}

const upArrowPress = (currVals) => {
  console.log('Up Arrow Pressed')
}

const downArrowPress = (currVals) => {
  console.log('Down Arrow Pressed')
}