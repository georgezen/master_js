const huevos = document.querySelectorAll('.huevo');
const limpiarButton = document.getElementById('limpiar');
const initialParent = {};
const audioInicio = new Audio('./audio/instruccion.m4a');
const audioOk = new Audio('./audio/ok.m4a');
const audioError = new Audio('./audio/error.m4a');
const audios = {
  1: new Audio('./audio/audio01.m4a'),
  2: new Audio('./audio/audio02.m4a'),
  3: new Audio('./audio/audio03.m4a'),
  4: new Audio('./audio/audio04.m4a'),
  5: new Audio('./audio/audio05.m4a'),
  6: new Audio('./audio/audio06.m4a'),
};

const limitesHuevos = {
  'nido1': 5,
  'nido2': 2,
  'nido3': 6,
  'nido4': 4,
};


audioInicio.play();


for (let huevo of huevos) {
  huevo.addEventListener('dragstart', ev => {
    ev.dataTransfer.setData("text", ev.target.id);
    initialParent[ev.target.id] = ev.target.parentElement;
  });

  huevo.addEventListener('dragend', ev => {
    if (!ev.target.parentElement.classList.contains('nido')) {
      initialParent[ev.target.id].appendChild(ev.target);
      audioError.play();
    }

    const nidos = Array.from(document.querySelectorAll('.nido'));
    const configuracionHuevos = nidos.map(nido => {
      return {
        idNido: nido.id,
        huevos: Array.from(nido.children).map(huevo => huevo.id)
      };
    });

    localStorage.setItem('configuracionHuevos', JSON.stringify(configuracionHuevos));
  });
}

window.onload = () => {
  const configuracionHuevos = JSON.parse(localStorage.getItem('configuracionHuevos'));

  if (configuracionHuevos) {
    for (let nido of configuracionHuevos) {
      const elementoNido = document.getElementById(nido.idNido);

      for (let idHuevo of nido.huevos) {
        const huevo = document.getElementById(idHuevo);
        elementoNido.appendChild(huevo);
      }
    }
  }
};

const allowDrop = ev => {
  ev.preventDefault();
}

const drop = ev => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const element = document.getElementById(data);

  if (ev.target.classList.contains('nido')) {
    let numHuevos = ev.target.getElementsByClassName('huevo').length;

    if (numHuevos < limitesHuevos[ev.target.id]) {
      ev.target.appendChild(element);
      arrangeEggsInNest(ev.target);
      numHuevos++;
      console.log(`Número de huevos en el nido ${ev.target.id}: ${numHuevos}`);

      if (numHuevos <= 6) {
        audios[numHuevos].play();
        audioOk.play();
      }
    } else {
      console.log(`El nido ${ev.target.id} ha alcanzado su límite de huevos.`);
    }
  }
}

const arrangeEggsInNest = nest => {
  const eggs = nest.getElementsByClassName('huevo');
  for (let i = 0; i < eggs.length; i++) {
    eggs[i].style.order = i;
  }
}

const nidos = document.querySelectorAll('.nido');
for (let nido of nidos) {
  nido.addEventListener('dragover', allowDrop);
  nido.addEventListener('drop', drop);
}


limpiarButton.addEventListener('click', () => {
  // Limpiar todos los huevos de los nidos
  window.location.reload();
  localStorage.clear();
});