$(document).ready(()=>{
console.log("hola");
$(".content-img").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 600,
  });

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

  //reloj
  

  setInterval(()=>{
    var reloj = moment().format('LTS');
    $('.reloj').html(reloj);
  },1000);

  

});