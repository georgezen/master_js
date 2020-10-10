"use strict";
$(document).ready(() => {
  console.log("dsdsds");

  //slider
  $(".content-img").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 600,
  });

  //post dinamicos
  var posts = [
    {
      title: "Te pones bien cachonda",
      subtitle: "hija de tu puta madre",
      contenido:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde" +
        "dsdasdadsdasdasdasdasdasdasdasdasdasdassdsssssssssssssssssssssss",
    },
    {
      title: "Te pones bien cachonda",
      subtitle: "hija de tu puta madre",
      contenido:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde" +
        "dsdasdadsdasdasdasdasdasdasdasdasdasdassdsssssssssssssssssssssss",
    },
    {
      title: "Te pones bien cachonda",
      subtitle: "hija de tu puta madre",
      contenido:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde" +
        "dsdasdadsdasdasdasdasdasdasdasdasdasdassdsssssssssssssssssssssss",
    },
  ];

  console.log(posts);

  posts.forEach((post, index) => {
    var posteado = `
        <div class="post">
        <article class="article">
        <p>Este es el post ${index}</p>
          <h2>${post.title}</h2>
          <span> ${post.subtitle}</span>
          <p>
            ${post.contenido}
          </p>
        </article>
      </div>
        `;
    document.querySelector(".section").innerHTML += posteado;
  });

  //dark mode
  var dark = document.querySelector(".dark");
  var tema = document.querySelector(".tema");
  var ruta_defecto = "http://localhost/master_js/proyecto1/css/style.css";
  var ruta = "http://localhost/master_js/proyecto1/css/dark-mode.css";

  var ruta_defecto_produccion =
    "https://www.dracosoftware-zen.com/master_js/proyecto1/css/style.css";
  var ruta_produccion =
    "https://www.dracosoftware-zen.com/master_js/proyecto1/css/dark-mode.css";

  dark.addEventListener("click", () => {
    if (tema.href == ruta_defecto) {
      tema.href = ruta;
      localStorage.setItem("dark-mode", "true");
      dark.value = "Modo claro";
      console.log("entra a modo obscuro");
    } else {
      tema.href = ruta_defecto;
      localStorage.setItem("dark-mode", "false");
      dark.value = "Modo obscuro";
      console.log("entra a modo claro");
    }
  });

  if (localStorage.getItem("dark-mode") === "true") {
    tema.href = ruta;
    dark.value = "Modo claro";
  } else {
    tema.href = ruta_defecto;
    dark.value = "Modo obscuro";
  }

  //almacenamiento con local storage
  var nombre = $("#nombre");
  var apellidos = $("#apellidos");
  var buton = $("#save");
  var parseo = "";
  buton.on("click", () => {
    almacenando();
  });

  function almacenando() {
    $('.user').html('');
    var obj = {
      nombre: nombre.val(),
      apellidos: apellidos.val(),
    };

    console.log(obj);
    localStorage.setItem("formulario", JSON.stringify(obj));
    parseo = JSON.parse(localStorage.getItem("formulario"));
    $(".user").append(parseo.nombre + "<br>");
    $(".user").append(parseo.apellidos + "<br>");
    limpiar();
    
    
  }

  function limpiar() {
    nombre.val("");
    apellidos.val("");
   
  }

  parseo = JSON.parse(localStorage.getItem("formulario"));

    if (parseo != null && parseo != 'undefined' && parseo != '') {
      $(".user").append(parseo.nombre + "<br>");
    $(".user").append(parseo.apellidos + "<br>");

      
    }
});
