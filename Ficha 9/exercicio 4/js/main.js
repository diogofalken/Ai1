var button = document.querySelector("button");
var input = document.querySelector("input");

button.addEventListener("click", function() {
  var random_number = Math.random() * 10;
  if (input.value == random_number) {
    alert("Acertou no numero!");
    input.disabled = "disabled";
  } else {
    input.value = "";
    alert("FALHOU, tente outra vez!");
  }
});
