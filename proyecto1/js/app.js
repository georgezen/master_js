"use strict";
$(document).ready(() => {
//   var decodificado1 = localStorage.getItem("tema");
//   tema.href = decodificado1;

  console.log("dsdsds");

  $(".content-img").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 600,
  });

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

  var dark = document.querySelector("#dark");
  var tema = document.querySelector("#tema");

  $(dark).on("click", () => {
    cargar_tema();
  });

  function cargar_tema() {
    if (tema.href == "http://127.0.0.1:5500/proyecto1/css/style.css") {
      dark.value = "White mode";
      $("#tema").prop(
        "href",
        "http://127.0.0.1:5500/proyecto1/css/dark-mode.css"
      );
    } else {
      dark.value = "Dark mode";
      $("#tema").prop("href", "http://127.0.0.1:5500/proyecto1/css/style.css");
    }
    //  $('#tema').prop('href','css/dark-mode.css');
    console.log(tema.href);
    localStorage.setItem("tema", tema.href);
  }
});
