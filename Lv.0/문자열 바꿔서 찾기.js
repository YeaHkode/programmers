function solution(myString, pat) {
  var newStr = "";
  for (let char of myString) {
    if (char === "A") {
      newStr += "B";
    } else if (char === "B") newStr += "A";
  }
  return newStr.includes(pat) ? 1 : 0;
}
