var inputs = document.querySelectorAll("input");
var buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    switch (button.innerHTML) {
      case "Multiplicar":
        var resultado = inputs[0].value * inputs[1].value;
        document.querySelector("p").innerHTML += " " + resultado;
        break;
      case "Dividir":
        if (inputs[1].value == 0) {
          alert("O 2º Número não pode ser 0!!!!");
          inputs[0].value = inputs[1].value = "";
          document.querySelector("p").innerHTML = "O resultado é:";
          return;
        }
        var resultado = inputs[0].value / inputs[1].value;
        document.querySelector("p").innerHTML += " " + resultado;
        break;
      case "Reset":
        inputs[0].value = inputs[1].value = "";
        document.querySelector("p").innerHTML = "O resultado é:";
        break;
    }
  });
});
