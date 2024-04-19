$(document).ready(() => {
  console.log("hola");

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

  

  $(".guardar-js").on("click", function () {
    

    var nombre = $('#nombre-js').val();
    var apellido = $('#apellido-js').val();
    var wrror = $('.name-error');
    
   

    if (nombre == "" || apellido == "") {
        wrror.html('Rellena todos los campos');
    } 
    else {
        alert('Formulario con todos los campos');
        wrror.html('');
    }

  });
});
