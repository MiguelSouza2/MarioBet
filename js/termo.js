const lista_de_palavras = ["primo"];

let exibicao_palavra;

let letter_1 = document.getElementById("termo_input_1");
let letter_2 = document.getElementById("termo_input_2");
let letter_3 = document.getElementById("termo_input_3");
let letter_4 = document.getElementById("termo_input_4");
let letter_5 = document.getElementById("termo_input_5");

function return_letter() {
  document.getElementById("termo_input_2").addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "Backspace") {
      letter_1.focus();
      console.log("returnizin");
    }
  });
  document.getElementById("termo_input_3").addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "Backspace") {
      letter_2.focus();
      console.log("returnizin");
    }
  });
  document.getElementById("termo_input_4").addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "Backspace") {
      letter_3.focus();
    }
  });
  document.getElementById("termo_input_5").addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "Backspace") {
      letter_4.focus();
    }
  });
}


function start_game() {
  if (letter_1.value !== "") {
    letter_2.focus();
    console.log("hello");
  }
  if (letter_2.value !== "") {
    letter_3.focus();
    console.log("hello");
  }
  if (letter_3.value !== "") {
    letter_4.focus();
    console.log("hello");
  }
  if (letter_4.value !== "") {
    letter_5.focus();
    console.log("hello");
  }
}
