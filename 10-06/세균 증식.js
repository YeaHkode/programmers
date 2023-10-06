function solution(n, t) {
  var bac = n;
  for (let i = 0; i < t; i++) {
    bac = bac * 2;
  }
  return bac;
}
