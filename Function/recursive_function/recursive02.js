function rangeOfNumbers(startNum, endNum) {

  if (endNum < 1 || startNum < 1) {
    return [];
  } else if (startNum === endNum) {

    return [startNum]
  }

  if (endNum > startNum) {

    let arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  } else if (endNum < startNum) {

    let arr = rangeOfNumbers(startNum - 1, endNum);
    arr.unshift(startNum);
    return arr;
  }
};