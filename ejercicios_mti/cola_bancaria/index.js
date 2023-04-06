let obj = {};
let arra = [];
for (let index = 0; index < 2; index++) {
    let obj = {};
    let tipo_evento = prompt('Que evento es');
    let name_cliente = prompt('Nombre');
    let prioridad = parseInt(prompt('prioridad'));

    if (tipo_evento == "a" || tipo_evento == "A") {
        obj.tipo_evento = tipo_evento;
        obj.nombre = null;
        obj.prioridad = prioridad;    
    }

    if (tipo_evento == "s" || tipo_evento == "S") {
        var letra_ini = prompt('Que letra tiene');
        obj.tipo_evento = tipo_evento;
        obj.nombre = name_cliente;
       

        const gana_puntos = (letra_inicial,name_cliente)=>{
            console.log(letra_inicial,name_cliente);
            let ini = name_cliente.charAt(0);
            
            if (ini == letra_inicial) {
                prioridad -= 2;
            }
            console.log(prioridad);
            return prioridad;
        }
        
        
        obj.letra_ini = letra_ini; 
        obj.prioridad = gana_puntos(letra_ini,name_cliente);   
    }

    if (tipo_evento == "c" || tipo_evento == "c") {
        obj.tipo_evento = tipo_evento;
        obj.nombre = name_cliente;
        obj.prioridad = prioridad;
    }




    arra.push(obj);
}

console.log(arra);

