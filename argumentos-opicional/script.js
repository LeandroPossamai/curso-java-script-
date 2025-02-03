function soma(a, b) {
  if (a == undefined || b == undefined) {
    return "Esta função precisa de dois argumentos";
  } else {
    return a + b;
  }
}

console.log(soma(6, 9));
console.log(soma());
