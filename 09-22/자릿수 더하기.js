function solution(n) {
  let string = n.toString();
  let result = string.split("");
  let answer = result
    .map((num) => Number(num))
    .reduce((acc, cur) => {
      return acc + cur;
    });
  // console.log(answer);
  return answer;
}

/** 참고할 코드
function solution(n) {
  let result = 0;

  while (n > 0) {
      result += n % 10;

      n = Math.floor(n/10);
  }

  return result;
}
*/
