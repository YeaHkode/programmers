function solution(n) {
  var arr = [];
  for (let a = 1; a <= n; a++) {
    arr.push(a);
  }
  arr = arr.filter((i) => {
    if (i % 2 == 0) {
      return i;
    }
  });
  return arr;
}
