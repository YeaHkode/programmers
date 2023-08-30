function solution(array) {
  var newarr = array.sort((a, b) => a - b);
  var answer = Math.floor(array.length / 2);
  return newarr[answer];
}
