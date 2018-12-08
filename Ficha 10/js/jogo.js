var resposta1 = "Hyper Text Markup Language";
var resposta2 = "Cascading Style Sheets";
var resposta3 = "<br>";
var respostas_corretas = [
  "Hyper Text Markup Language",
  "Cascading Style Sheets",
  "Na tag head ou dentro da tag body",
  "br",
  "head section"
];
var respostas = document.querySelectorAll("p");
var pontuacao = 0;
var perguntas = [pergunta2, pergunta3, pergunta4, pergunta5];
var i = -1;

respostas.forEach(resposta => {
  resposta.addEventListener("click", function() {
    i++;
    if (resposta.innerHTML == respostas_corretas[i]) {
      document.getElementById("resposta_certa").style.display = "block";
      pontuacao += 5;
      if (i == 4) {
        acabouJogo();
      }
      perguntas[i]();
    } else {
      pontuacao -= 2;
      if (pontuacao < 0) {
        pontuacao = 0;
      }
      switch (document.getElementById("pergunta").innerHTML) {
        case "O que significa HTML?":
          final_pergunta("question3");
          setTimeout(pergunta2, 1000);
          break;
        case "O que significa CSS?":
          final_pergunta("question1");
          setTimeout(pergunta3, 1000);
          break;
        case "Onde colocar o JavaScript?":
          final_pergunta("question1");
          setTimeout(pergunta4, 1000);
          break;
        case "Como se coloca um line break?":
          final_pergunta("question1");
          setTimeout(pergunta5, 1000);
          break;
        default:
          final_pergunta("question3");
          setTimeout(acabouJogo, 1000);
          break;
      }
    }
  });
});

function pergunta2() {
  limparCores();
  document.getElementById("pergunta").innerHTML = "O que significa CSS?";
  document.getElementById("question1").innerHTML = "Cascading Style Sheets";
  document.getElementById("question2").innerHTML = "Carbon Style Shop";
  document.getElementById("question3").innerHTML = "Cascading Style Snippets";
  document.getElementById("question4").innerHTML = "Cascade Style Sheets";
}

function pergunta3() {
  limparCores();
  document.getElementById("pergunta").innerHTML = "Onde colocar o JavaScript?";
  document.getElementById("question1").innerHTML =
    "Na tag head ou dentro da tag body";
  document.getElementById("question2").innerHTML = "Na tag head";
  document.getElementById("question3").innerHTML = "Na tag body";
  document.getElementById("question4").innerHTML = "Na tag link";
}

function pergunta4() {
  limparCores();
  document.getElementById("pergunta").innerHTML =
    "Como se coloca um line break?";
  document.getElementById("question1").innerHTML = "br";
  document.getElementById("question2").innerHTML = "lb";
  document.getElementById("question3").innerHTML = "linebreak";
  document.getElementById("question4").innerHTML = "break";
}

function pergunta5() {
  limparCores();
  document.getElementById("pergunta").innerHTML =
    "Qual e o sitio certo no HTML para referir uma style sheet externa?";
  document.getElementById("question1").innerHTML = "Final do documento";
  document.getElementById("question2").innerHTML = "body section";
  document.getElementById("question3").innerHTML = "head section";
  document.getElementById("question4").innerHTML = "carbon section";
}

function acabouJogo() {
  limparCores();
  document.getElementById("quiz").style.display = "none";
  document.getElementById("pergunta").innerHTML =
    "Acabou o teste com " + pontuacao + " pontos.";
  document.getElementById("resposta_certa").style.display = "none";
  document.querySelector("button").style.display = "block";
}

function final_pergunta(respostaCerta) {
  switch (respostaCerta) {
    case "question1":
      document.getElementById("question1").parentNode.style.backgroundColor =
        "green";
      document.getElementById("question2").parentNode.style.backgroundColor =
        "red";
      document.getElementById("question3").parentNode.style.backgroundColor =
        "red";
      document.getElementById("question4").parentNode.style.backgroundColor =
        "red";
      break;
    case "question2":
      document.getElementById("question2").parentNode.style.backgroundColor =
        "green";
      document.getElementById("question1").parentNode.style.backgroundColor =
        "red";
      document.getElementById("question3").parentNode.style.backgroundColor =
        "red";
      document.getElementById("question4").parentNode.style.backgroundColor =
        "red";
      break;
    case "question3":
      document.getElementById("question3").parentNode.style.backgroundColor =
        "green";
      document.getElementById("question2").parentNode.style.backgroundColor =
        "red";
      document.getElementById("question1").parentNode.style.backgroundColor =
        "red";
      document.getElementById("question4").parentNode.style.backgroundColor =
        "red";
      break;
    case "question4":
      document.getElementById("question4").parentNode.style.backgroundColor =
        "green";
      document.getElementById("question2").parentNode.style.backgroundColor =
        "red";
      document.getElementById("question3").parentNode.style.backgroundColor =
        "red";
      document.getElementById("question1").parentNode.style.backgroundColor =
        "red";
      break;
    default:
      break;
  }
}

function limparCores() {
  document.getElementById("question1").parentNode.style.backgroundColor = "";
  document.getElementById("question2").parentNode.style.backgroundColor = "";
  document.getElementById("question3").parentNode.style.backgroundColor = "";
  document.getElementById("question4").parentNode.style.backgroundColor = "";
}

function reiniciarJogo() {
  window.location.reload();
}
