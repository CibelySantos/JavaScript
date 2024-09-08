// Cibely Cristiny n°04

let primeiroNumeros = [];
for (let i = 0; i < 10; i++) {
    primeiroNumeros.push(Math.floor(Math.random() * 101)); 
}
console.log("Array original: ", primeiroNumeros);
let segundoNumeros = [];
for (let i = 0; i < primeiroNumeros.length; i++) {
    primeiroNumeros[i] % 2 === 0 ? segundoNumeros.push(primeiroNumeros[i]) : null;
}
console.log("Array de números pares: ", segundoNumeros);
