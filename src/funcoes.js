// funcoes.js
function handleBotaoHeaderClick() {
    // Realize a operação desejada, por exemplo, multiplicar por 2
    const numero = 5; // Exemplo de um número qualquer
    const resultado = numero * 2;
  
    // Armazene o resultado no localStorage
    localStorage.setItem('resultado', resultado.toString());
  
    // Exiba o resultado em um alerta
    alert(`Resultado da operação: ${resultado}`);
  }
  