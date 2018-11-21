var button = document.querySelector("button");
var input = document.querySelector("input");

button.addEventListener("click", function() {
  var random_number = 3;
  if (input.value == random_number) {
    alert("Acertou no numero!");
    input.disabled = "disabled";
  } else {
    input.value = "";
    alert("FALHOU, tente outra vez!");
  }
});
