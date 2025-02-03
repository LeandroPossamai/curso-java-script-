function multiplicarTresNumeros(a, b, c) {
  return a * b * c;
}

console.log(multiplicarTresNumeros(2, 3, 5));

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    return "Pode dirigir";
  } else idade < 18 || cnh == false;
  return "Não pode dirigir";
}

console.log(podeDirigir(17, true));
console.log(podeDirigir(18, true));
console.log(podeDirigir(21, true));
