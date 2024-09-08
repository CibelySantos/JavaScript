// Cibely Cristiny n°04

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let palpiteUsuario = 0; 
let tentativas = 0; 

while (palpiteUsuario !== numeroSecreto) {
  palpiteUsuario = parseInt(prompt("Adivinhe o número entre 1 e 100:"), 10);
  tentativas++;

  let mensagem = palpiteUsuario < numeroSecreto
    ? "O número é maior. Tente novamente."
    : palpiteUsuario > numeroSecreto
    ? "O número é menor. Tente novamente."
    : "Parabéns! Você acertou o número.";
  console.log(mensagem);
}
console.log(`Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`);