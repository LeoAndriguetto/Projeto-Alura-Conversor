function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor);
    var valorEmReal = valorEmDolar * 5;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em reais é R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  function ConverterEuro() {
    var valorEuro = document.getElementById("valor");
    var valor2 = valorEuro.value;
    var valorEmDolar2 = parseFloat(valor2);
    var valorEmEuro = valorEmDolar2 + 0.01;
    var elementoValorConvertidoEu = document.getElementById("valorConvertidoEu");
    var valorConvertidoEu = "O valor em Euros é €" + valorEmEuro;
    elementoValorConvertidoEu.innerHTML = valorConvertidoEu;
  }