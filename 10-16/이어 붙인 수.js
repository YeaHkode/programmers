function solution(num_list) {
  var odd = [];
  var even = [];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list.findIndex() % 2 != 0) {
      odd.push(num_list[i]);
    } else even.push(num_list[i]);
  }
  console.log(odd);
}

solution([2, 3, 5, 4, 3]);
