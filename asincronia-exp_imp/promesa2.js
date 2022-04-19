const promesa2 = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          
           if (numero > 3) {
               resolve(numero);
           } else {
               reject(numero);
           }

        },1000);
    })
    .then((numero2) =>  {return numero2})
    .catch(err => console.log(err));
}

export { promesa2 };