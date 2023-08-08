function solution(sides) {
  let a = sides[0];
  let b = sides[1];
  let c = sides[2];

  if (a > b) {
    [a, b] = [b, a];
  }
  if (b > c) {
    [b, c] = [c, b];
  }

  if (c < a + b) {
    return 1;
  } else {
    return 2;
  }
}
