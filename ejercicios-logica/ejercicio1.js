//@ts-check

let heroes = [
    {
        nick: 'iron man',
        name:'tony stark',
        poderes: 'inteligencia y mucha pasta',
        bando: 'los vengadores',
        edad: 32,
        is_life: false
    },
    {
        nick: 'superman',
        name:'kallel',
        poderes: 'un chingo',
        bando: 'dc',
        edad: 21,
        is_life: true
    },
    {
        nick: 'hulk',
        name:'ni se quien',
        poderes: 'ser verde y neurotico',
        bando: 'los vengadores',
        edad: 44,
        is_life: true
    },
    {
        nick: 'batman',
        name:'bruno diaz',
        poderes: 'ser de capa negra y extrañar a sus padres',
        bando: 'dc',
        edad: 34,
        is_life: false
    }
];




const busqueda = (heroes,super_heroe) => {


    let existeElemento = heroes.find(element => element.nick === super_heroe);
    if (existeElemento === undefined) {
        console.log(`No existe este heroe`);    
    }else{
        console.log(`el heroe es ${existeElemento.nick}`);
    }
}

busqueda(heroes,'superman');

const busqueda_global = (heroes,arra_heroes) => {
    
    arra_heroes.forEach(element => {
      busqueda(heroes,element);
    });

    
}



busqueda_global(heroes,['batman','hulk1']);