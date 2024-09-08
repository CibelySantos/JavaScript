// Cibely Cristiny n°04

let senhaCorreta = "1234";
let senhaDigitada = "";
while (senhaDigitada !== senhaCorreta) {
  senhaDigitada = prompt("Digite a senha numérica de 4 dígitos:");
  
  if (senhaDigitada !== senhaCorreta) {
    console.log("Senha incorreta. Tente novamente.");
  }
}
console.log("Senha correta! Acesso permitido.");
