function solution(numbers) {
  var answer = numbers.sort((a, b) => a - b);
  console.log(answer);
  return answer[answer.length - 1] * answer[answer.length - 2];
}
