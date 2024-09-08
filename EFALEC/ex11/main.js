// Cibely Cristiny n°04

function verificarCampo() {
    let entrada = prompt("Digite algo:");
    let mensagem = entrada.trim() === "" ? "Vazio" : "Contém conteúdo";
    alert(mensagem);
  }
  verificarCampo();
  