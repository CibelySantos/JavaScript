// Cibely Cristiny n°04

function inverterString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }
    return stringInvertida;
  }
let resultado = inverterString("exemplo");
console.log(resultado);