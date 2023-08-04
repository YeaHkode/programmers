function solution(n, k) {
  var service = parseInt(n / 10);
  console.log(service);
  return 12000 * n + 2000 * k - 2000 * service;
}
