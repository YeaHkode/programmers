function solution(my_string) {
  let str = /[^0-9]/g;
  let result = my_string.replace(str, "");
  let oldAnswer = [...result];
  let newAnswer = oldAnswer.map(Number);
  let sum = 0;
  var final = newAnswer.forEach((num) => {
    sum += num;
  });
  return sum;
}

solution("aAb1B2cC34oOp");
