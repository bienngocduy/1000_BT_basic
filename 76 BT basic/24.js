//liet ke uoc so le
function bai24(n) {
  let i;
  for (i = 1; i <= n; i++) {
    if ((n % i == 0) & (i % 2) != 0) {
      console.log(i)
    }
  }
  return i;
}
bai24(7) 