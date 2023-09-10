function solution(num_str) {
  return (answer = num_str
    .split("")
    .map(Number)
    .reduce((acc, cur) => {
      return (acc += cur);
    }));
}
