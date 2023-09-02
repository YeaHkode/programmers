function solution(my_string, k) {
  var newArr = [my_string];
  var foo = newArr.map(function (ele) {
    return ele.repeat(k);
  });
  return foo.toString();
}

// 참고 코드
// function solution(my_string, k) {
//     return my_string.repeat(k)
// }
