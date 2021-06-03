import "bootstrap";
import "./style.css";

window.onload = function() {};
const btn_draw = document.querySelector("#btn_draw");
btn_draw.addEventListener("click", function(event) {
  let txt_value = document.querySelector("#txt_value").value;
  if (txt_value != "" || txt_value >= 1) {
    for (let i = 1; i <= txt_value; i++) {
      // alert(txt_value + "por " + i + " vez");
      renderCard(".file-original");
    }
  } else {
    alert("El input debe ser mayor a 0");
  }

  //renderCard();
});
function addCard(where) {
  let new_card = document.createElement("DIV");
  new_card.setAttribute("class", "card");
  document.querySelector(where).appendChild(new_card);
}

function renderCard(where) {
  //asignamos valor de la carta y el tipo
  let card_value = cardValue();
  let card_type = cardType();

  //creamos los elementos que contendran nuesta carta y le asignamos su clase
  let new_card = document.createElement("DIV");
  new_card.setAttribute("class", "card");
  document.querySelector(where).appendChild(new_card);

  let helper1 = document.createElement("DIV");
  helper1.setAttribute("class", "card-header");
  let helper2 = document.createElement("DIV");
  helper2.setAttribute("class", "card-body");
  let helper3 = document.createElement("DIV");
  helper3.setAttribute("class", "card-footer");

  //añadimos los elementos al nodo en el documento
  document.querySelector(".card").appendChild(helper1);
  document.querySelector(".card").appendChild(helper2);
  document.querySelector(".card").appendChild(helper3);

  //creamos elementos para cada parte de la carta
  let type_to_card_header = document.createElement("P");
  let value_to_card = document.createElement("P");
  let type_to_card_footer = document.createElement("P");

  //asignamos los valores al elemento
  type_to_card_header.innerHTML = `${card_type}`;
  value_to_card.innerHTML = `${card_value}`;
  type_to_card_footer.innerHTML = `${card_type}`;

  //coloreamos el tipo
  if (card_type == "♥" || card_type == "♦") {
    type_to_card_header.style.color = "red";
    type_to_card_footer.style.color = "red";
  } else {
    type_to_card_header.style.color = "black";
    type_to_card_footer.style.color = "black";
  }

  //agregamos los elementos al nodo en el documento
  document.querySelector(".card-header").appendChild(type_to_card_header);
  document.querySelector(".card-body").appendChild(value_to_card);
  document.querySelector(".card-footer").appendChild(type_to_card_footer);
}

function cardValue() {
  let value = Math.floor(Math.random() * 13 + 1);
  if (value == 11) {
    value = "J";
  }
  if (value == 12) {
    value = "Q";
  }
  if (value == 13) {
    value = "K";
  }
  if (value == 1) {
    value = "A";
  }
  return value;
}

function cardType() {
  let type = Math.floor(Math.random() * 4 + 1);
  if (type == 1) {
    type = "♥";
  }
  if (type == 2) {
    type = "♦";
  }
  if (type == 3) {
    type = "♣";
  }
  if (type == 4) {
    type = "♠";
  }
  return type;
}
