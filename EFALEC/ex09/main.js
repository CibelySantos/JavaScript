// Cibely Cristiny n°04

function verificarPrimo(numero) {
    if (numero <= 1) {
      return false; 
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false; 
      }
    }
    return true; 
  }
let numeroUsuario = parseInt(prompt("Digite um número inteiro:"));
if (verificarPrimo(numeroUsuario)) {
    console.log(`${numeroUsuario} é um número primo.`);
} else {
    console.log(`${numeroUsuario} não é um número primo.`);
}