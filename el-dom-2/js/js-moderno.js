'use strict';
console.log('sdsdsds');

const formato_json = document.querySelector(".formato_json");
//ntroduccion a fetch, que sirve para hacer peticiones a una api/backend
var users = [];
var cadena = "";
fetch("https://reqres.in/api/users")
  .then(data => data.json()) /*para poder usar datos devueltos por fetch se convierten a json*/
  .then(user => {
    users = user.data;
      console.log(users);
      users.forEach((user,index) => {
          cadena = index + user.email;
          var span = document.createElement('h3');
          span.append(cadena);
          formato_json.appendChild(span);
      });
  });
