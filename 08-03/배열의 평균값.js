function solution(numbers) {
  var foo = 0;
  for (let i = 0; i < numbers.length; i++) {
    foo = foo + numbers[i];
  }
  return (answer = foo / numbers.length);
}
