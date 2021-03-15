var tablin = $("#table").DataTable({
    'language': {
        url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json",
    },
    "columns": [
        null,
        null,
        null,   
        { "visible": false },
        null
      ]
});

$(document).ready(function () {
    var nombre = document.querySelector("#nombre");
    var apellidos = document.querySelector("#apellidos");
    var paises = document.querySelector("#paises");
    var savin = document.querySelector("#save");
    var update = document.querySelector("#update");
    var lista = document.querySelector("#lista");
    var opt = lista.options[lista.selectedIndex].text;
    var save_all = document.querySelector('#guardar_todo');
    var mostrar_ocultar = document.querySelector("#mostrar_ocultar");
    const cont_column = document.querySelector(".cont_column");
    savin.addEventListener("click", () => {
        add_fila(opt);
        limpiar();
    });

    mostrar_ocultar.addEventListener("click", () => {
        show_hiden(cont_column, mostrar_ocultar);
    });

    update.addEventListener("click", () => {
        update_row();
    });

    save_all.addEventListener('click',()=>{
        save_alli();
    });
});

//Funcion que muestra u oculta el panel para ocultar columnas
function show_hiden(cont_column, mostrar_ocultar) {
    if (mostrar_ocultar.checked == true) {
        cont_column.style.display = "block";
    } else {
        cont_column.style.display = "none";
    }
}

function add_fila(opt) {
    tablin.row
        .add([
            nombre.value,
            apellidos.value,
            lista.value,
            paises.value,
            '<span class="editarcio" style="cursor:pointer;">Editar</span>' +
                '<span class="eliminarcio" style="cursor:pointer;">Eliminar</span>',
        ])
        .draw();
}

//Funcion para obtener los valores a editar del row clickeado y pintar
//valores en el form de editar
$("#table tbody").on("click", ".editarcio", function () {
    var data = tablin.row($(this).parents("tr")).data();
    var idx = tablin.row($(this).parents("tr")).index();

    $("#hiddden").val(idx);
    $("#nombre_edit").val(data[0]);
    $("#apellidos_edit").val(data[1]);
    $("#lista_edit").val(data[2]);
});

//Funcion para eliminar una fila del datatable
$("#table tbody").on("click", ".eliminarcio", function () {
    tablin.row($(this).parents("tr")).remove().draw();
});


//Funcion para ocultar/mostrar columnas, la columna de pais esta oculta por defecto
// en la definicion de columns del datatable
$("a.show_hidden").on("click", function (e) {
    e.preventDefault();

    // Get the column API object
    var column = tablin.column($(this).attr("data-column"));

    // Toggle the visibility
    column.visible(!column.visible());
});

//funcion que modifica los valores de la fila seleccionada
function update_row() {
    var row_index_edit = $("#hiddden").val();
    var temp = tablin.row(row_index_edit).data();
    

    temp[0] = $("#nombre_edit").val();
    temp[1] = $("#apellidos_edit").val();
    temp[2] = $("#lista_edit").val();

    tablin.row(row_index_edit).data(temp).draw();
    limpiar();
}

function save_alli() {
    var tableData = tablin.rows().data().toArray();
   save_to_object(tableData);

   console.log(tableData);
    

}

function save_to_object(tableData) {
    var obj_save = {
        'observa': 'hola pinche putita',
        'la_matriz': tableData
    }
    console.log(obj_save);
}
function limpiar() {
    $("#nombre").val("");
    $("#apellidos").val("");
    $("#lista").val(1);

    $("#nombre_edit").val("");
    $("#apellidos_edit").val("");
    $("#lista_edit").val(1);
}
