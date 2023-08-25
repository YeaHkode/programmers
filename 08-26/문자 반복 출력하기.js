function solution(my_string, n) {
  var newStr = my_string.split("");
  let str = newStr.map(function (element) {
    return element.repeat(n);
  });
  return str.join("");
}
