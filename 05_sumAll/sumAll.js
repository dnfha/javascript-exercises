const sumAll = function (num1, num2) {
  if (!(Number.isInteger(num1) && Number.isInteger(num2) && num1 + num2 >= 2)) {
    return "ERROR";
  }
  if (num1 + num2 === 2) {
    return 1;
  }
  let sum = 0;
  let bigNum;
  let smallNum;
  if (num1 > num2) {
    bigNum = num1;
    smallNum = num2;
  } else {
    smallNum = num1;
    bigNum = num2;
  }
  for (let i = smallNum; i <= bigNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
