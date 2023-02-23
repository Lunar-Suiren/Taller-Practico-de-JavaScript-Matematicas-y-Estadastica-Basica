function esPar(lista) {
    return !(lista.length % 2);
}
function esImpar(lista) {
    return (lista.length % 2);
}

function calcularMediana(lista) {
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
        // const index1Par = (lista.length / 2) - 1;
        // const index2Par = lista.length / 2;
        
        const mitad1Par = lista[(lista.length / 2) - 1];
        const mitad2Par = lista[lista.length / 2]
        const listaMitades = [mitad1Par, mitad2Par]

        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;
    } else {
        const indexListaImpar = Math.floor(lista.length / 2);
        const medianaImpar = lista[indexListaImpar];
        console.log(medianaImpar);
        return medianaImpar;
    }
}

function calcularPromedio(lista) {
// sumar todos los elementos del array / cantidad de elementos 
// let sumaLista = 0;
//     for (let i = 0; i < lista.length; i++) {
//         sumaLista += lista[i];
//     }
    // function sumarElementos(valorAcumulado, nuevoValor) {
    //     return valorAcumulado + nuevoValor;
    // }

    // const sumaLista = lista.reduce((a, b) => a + b);

    const sumarElementos = (valorAcumulado, nuevoValor) => {
        return valorAcumulado + nuevoValor;
    }
    const sumaLista = lista.reduce(sumarElementos);


    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}