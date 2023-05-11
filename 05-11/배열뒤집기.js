function solution(num_list) {
  for (let i = 0; i < (num_list.length - 1) / 2; i++) {
    var temp;
    temp = num_list[i];
    num_list[i] = num_list[num_list.length - 1 - i];
    num_list[num_list.length - 1 - i] = temp;
  }
  return num_list;
}

// function solution(num_list) {
//     return num_list.sort((a, b) => -1);
// }

// function solution(num_list) {
//     return num_list.reverse()
// }
