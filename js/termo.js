const lista_de_palavras = ["p", "r", "i", "m", "o"];

let exibicao_palavra;

let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");

let letter_1 = document.getElementById("termo_input_1");
let letter_2 = document.getElementById("termo_input_2");
let letter_3 = document.getElementById("termo_input_3");
let letter_4 = document.getElementById("termo_input_4");
let letter_5 = document.getElementById("termo_input_5");

function return_letter() {

  document.getElementById("termo_input_2").addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      letter_1.focus();
    }
  });
  document.getElementById("termo_input_3").addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      letter_2.focus();
    }
  });
  document.getElementById("termo_input_4").addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      letter_3.focus();
    }
  });
  document.getElementById("termo_input_5").addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      letter_4.focus();
      letter_5.value = '';
    }
  });
  
}


function start_game() {
  input_letters = []
  
  if (letter_1.value !== "") {
    input_letters[0] = letter_1.value;
    letter_2.focus();
  }
  if (letter_2.value !== "") {
    input_letters[1] = letter_2.value;
    letter_3.focus();
  }
  if (letter_3.value !== "") {
    input_letters[2] = letter_3.value;
    letter_4.focus();
  }
  if (letter_4.value !== "") {
    input_letters[3] = letter_4.value;
    letter_5.focus();
  }
  if(letter_5.value !== ""){
    input_letters[4] = letter_5.value;
  }

  console.log(input_letters);
  console.log(lista_de_palavras);
  if((input_letters.length === lista_de_palavras.length) && (input_letters.join('') === lista_de_palavras.join(''))){
    letter_1.style.backgroundColor = 'green';
    letter_2.style.backgroundColor = 'green';
    letter_3.style.backgroundColor = 'green';
    letter_4.style.backgroundColor = 'green';
    letter_5.style.backgroundColor = 'green';
  }
  else if((input_letters.length === lista_de_palavras.length) && (input_letters.join('') !== lista_de_palavras.join(''))){
    line1.querySelectorAll(".termo_input").forEach(input =>{
      input.disabled = true;
    });
    line2,querySelectorAll(".termo_input").forEach(input =>{
      input.disabled = false;
    });
  }
}
