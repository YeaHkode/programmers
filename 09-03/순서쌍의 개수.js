function solution(n) {
  var i = 0;
  for (let j = 0; j < n; j++) {
    if (n % j == 0) {
      i++;
    }
  }
  return i + 1;
}
