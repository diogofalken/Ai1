var button = document.querySelector("button");
var input = document.querySelector("input");

button.addEventListener("click", function() {
  var random_number = Math.random() * 100;
  // Confirmar se o numero esta entre 0 e 100
  if (input.value < 0) {
    alert("Insira um numero maior que 0");
    input.value = "";
    return;
  } else if (input.value > 100) {
    alert("Insira um numero menor que 100");
    input.value = "";
    return;
  }

  if (input.value == random_number) {
    alert("Acertou no numero!");
    input.disabled = "disabled";
  } else {
    input.value = "";
    alert("FALHOU, tente outra vez!");
  }
});
