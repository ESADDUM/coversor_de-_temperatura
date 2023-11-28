
// PARTE 2 
function converterTemperatura() {
    // --------------------------- Elementos de entrada
    var temperaturaInput = document.getElementById("temperature");
    var unidadeSelect = document.getElementById("unit");
    var resultadoDiv = document.getElementById("result");

    // --------------------------- Obtem o valor e a unidade selecionada
    var temperatura = parseFloat(temperaturaInput.value);
    
    // --------------------------- Verifica se a entrada é válida
    if (isNaN(temperatura)) {
      resultadoDiv.textContent = "Por favor, insira uma temperatura válida.";
      return;
    }

    var unidadeOrigem = unidadeSelect.value;
    var unidadeDestino = (unidadeOrigem === 'celsius') ? 'fahrenheit' : 'celsius';
    
    var resultado = (unidadeOrigem === 'celsius') ? celsiusParaFahrenheit(temperatura) : fahrenheitParaCelsius(temperatura);
  
    resultadoDiv.textContent = `Resultado em ${unidadeDestino}: ${resultado.toFixed(2)} º`;
}
  
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
  
function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

 // -------------------------- Converte a temperatura
   // var resultado;
   // if (unidade === "celsius") {
  //  resultado = " Resultado em fahrenheit " + (temperatura * 9/5 + 32).toFixed(2) + " °F";
  //  } else if (unidade === "fahrenheit") {
  //    resultado = " Resultado em celsius: " + ((temperatura - 32) * 5/9).toFixed(2) + " °C";
  //  }

 // -------------------------- Exibir o resultado
  //  resultadoDiv.innerHTML = resultado;
  //}
