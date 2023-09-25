function solution(n, control) {
  let controlArray = [...control];
  let sum = 0;
  for (let i = 0; i < controlArray.length; i++) {
    if (controlArray[i] === "w") sum += 1;
    else if (controlArray[i] === "s") sum -= 1;
    else if (controlArray[i] === "d") sum += 10;
    else if (controlArray[i] === "a") sum -= 10;
  }
  return sum + n;
}
