function solution(num_list) {
  if (num_list.length >= 11) return num_list.reduce((acc, cur) => acc + cur);
  else return num_list.reduce((acc, cur) => acc * cur);
}

/**
function solution(num_list) {
  return num_list.length >= 11
    ? num_list.reduce((acc, cur) => acc + cur)
    : num_list.reduce((acc, cur) => acc * cur);
} 
*/
