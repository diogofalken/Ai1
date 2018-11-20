var aux = 0; /* 0 -> Domingo
                1 -> Segunda
                2 -> Terca
                3 -> Quarta
                4 -> Quinta
                5 -> Sexta
                6 -> Sabado
              */

function showdays1() {
  if (aux === 0) {
    alert("Domingo");
    aux++;
  } else if (aux === 1) {
    alert("Segunda");
    aux++;
  } else if (aux === 2) {
    alert("Terça");
    aux++;
  } else if (aux === 3) {
    alert("Quarta");
    aux++;
  } else if (aux === 4) {
    alert("Quinta");
    aux++;
  } else if (aux === 5) {
    alert("Sexta");
    aux++;
  } else if (aux === 6) {
    alert("Sabado");
    aux = 0;
  }
}

var dia_index = 0;
var dia_da_semana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado"
];

function showdays2() {
  if (dia_index === 7) {
    dia_index = 0;
  }
  alert(dia_da_semana[dia_index++]);
}
