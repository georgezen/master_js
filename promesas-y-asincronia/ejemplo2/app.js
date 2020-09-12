"use strict";

var usuarios = document.querySelector(".usuarios");
var btn = document.querySelector("#btn");
var obtener_janet = document.querySelector("#janet");

btn.addEventListener("click", () => llamado());

function llamado() {
  setTimeout(() => {
    fetch("https://reqres.in/api/users")
      .then((data) => data.json())
      .then((users) => {
        console.log(users);
        to_do_list(users.data);

        return getJanet();
      })
      .then((data) => data.json())
      .then((janet) => {
        imprime_janet(janet.data);
      });
  }, 2000);
}

function to_do_list(users) {
  users.forEach((user) => {
    var h3 = document.createElement("h3");
    var cadena = user.id + " Usuario es " + user.first_name;
    console.log(cadena);
    h3.innerHTML = cadena;
    usuarios.appendChild(h3);
  });
}

function getJanet() {
  return fetch("https://reqres.in/api/users/2");
}

function imprime_janet(janet) {
  console.log(janet);
  var h4 = document.createElement("h4");
  var img = document.createElement("img");
  var cadena1 = janet.id + " Usuario es " + janet.first_name;
  img.src = janet.avatar;
  console.log(cadena1);
  h4.innerHTML = cadena1;
  obtener_janet.append(h4);
  obtener_janet.append(img);
}
