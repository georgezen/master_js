const heroes = [
    {
        id: 1,
        name: "Batman",
        owner: "DC",
    },
    {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
    },
    {
        id: 3,
        name: "Superman",
        owner: "DC",
    },
    {
        id: 4,
        name: "Flash",
        owner: "DC",
    },
    {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
    },
];

const render = (heroes) => {
    return new Promise((resolve, reyect) => {
        setTimeout(() => {
            if (heroes) {
                let renderR = renderReal(heroes);

               resolve(renderR);
            } else {
                reyect("Error 1");
            }
        }, 2000);
    })
    .then((renderR) => {
        return secondPromise(renderR);
        
     })
     .then((renderR) => {
        let h5 = document.createElement("h5");
        h5.textContent = "Hola h5";
        renderR.appendChild(h5);
        return renderR;
        
     })
    .catch((err) => {
        console.log(err);
    });
};

const secondPromise = (renderR) => {
    let br = document.createElement("br");
    let texto = 'hola pinche putita'
    renderR.appendChild(br);
    let h1 = document.createElement("h1");
    h1.append(texto);
    renderR.appendChild(h1);

    return renderR;
}
   

const renderReal = (heroes) => {
    let uli = document.createElement("ul");

    heroes.map((hero) => {
        let li = document.createElement("li");
        li.textContent = `${hero.id} ${hero.name} ${hero.owner}`;
        uli.appendChild(li);
    });
    return uli;
}

export { heroes, render };
