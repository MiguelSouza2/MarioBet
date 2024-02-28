const lista_de_palavras = ["primo"];

let exibicao_palavra;

let letter_1 = document.getElementById("termo_input_1");
let letter_2 = document.getElementById("termo_input_2");
let letter_3 = document.getElementById("termo_input_3");
let letter_4 = document.getElementById("termo_input_4");
let letter_5 = document.getElementById("termo_input_5");
let letter_input_1 = letter_1.value;
let letter_input_2 = letter_2.value;
let letter_input_3 = letter_3.value;
let letter_input_4 = letter_4.value;

function start_game() {

  
    if (letter_input_1 !== "") {
      letter_2.focus();
      console.log("hello");

    }
    if (letter_input_2 !== "") {
      letter_3.focus();
      console.log("hello");
    }
    if (letter_input_3 !== "") {
      letter_4.focus();
      console.log("hello");
    }
    if (letter_input_4 !== "") {
      letter_5.focus();
      console.log("hello");
    }

}

function return_letter(){
    letter_2.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "Backspace") {
        letter_1.focus();
    };
});
    
}

console.log("funfando");