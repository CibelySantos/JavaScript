// Cibely Cristiny n°04

let soma = 0;
for (let i = 1; i <= 50; i++) {
  i % 2 !== 0 ? soma += i : null;
}
console.log("A soma de todos os números ímpares de 1 a 50 é:", soma);
