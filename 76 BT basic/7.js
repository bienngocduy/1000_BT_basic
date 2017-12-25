function tinh(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result = result + (i / (i + 1));
  }
  return result;
}
console.log(tinh(1));
