function solution(my_string, alp) {
  var newAlp = alp.toUpperCase();
  return my_string.replaceAll(alp, newAlp);
}
