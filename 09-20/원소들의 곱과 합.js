function solution(num_list) {
  let sumMulti = 1;
  let sumPlus = num_list.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  let sumMultiResult = num_list.forEach((num) => {
    sumMulti *= num;
  });
  if (sumMulti > sumPlus ** 2) return 0;
  else return 1;
}
