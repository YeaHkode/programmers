function solution(sides) {
  let a = sides[0];
  let b = sides[1];
  let c = sides[2];
  if (sides[0] > sides[1]) {
    sides[0] = a;
    sides[1] = b;
  } else {
    sides[0] = b;
    sides[1] = a;
  }
  if (a < sides[2]) {
    a = c;
    sides[2] = a;
  } else {
    sides[2] = c;
  }
  if (a <= b + c) {
    return 1;
  } else return 2;
}
