function solution(s1, s2) {
  var foo = s1.filter((v) => s2.includes(v));
  return foo.length;
}
