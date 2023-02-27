const PlatziMath = {
    
}

PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
}
PlatziMath.esImpar = function esImpar(lista) {
    return (lista.length % 2);
}

PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];
        
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }

    
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
    const moda = listaMaxNumber[0];
    // console.log(listaCount, listaArray, listaOrdenada, listaMaxNumber);
    // console.log('La moda es ' + listaMaxNumber[0]);
    return moda;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);

    if (listaEsPar) {
        // const index1Par = (lista.length / 2) - 1;
        // const index2Par = lista.length / 2;

        const mitad1Par = lista[(lista.length / 2) - 1];
        const mitad2Par = lista[lista.length / 2]
        const listaMitades = [mitad1Par, mitad2Par]

        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
        return medianaListaPar;
    } else {
        const indexListaImpar = Math.floor(lista.length / 2);
        const medianaImpar = lista[indexListaImpar];
        console.log(medianaImpar);
        return medianaImpar;
    }
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
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

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
      return valorAcumulado - nuevoValor;
    }
    
    // const lista = listaDesordenada.sort((a,b) => a-b);
    const lista = listaDesordenada.sort(ordenarListaSort);
    
    return lista;
  }
  
PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
    function ordernarListaSort(valorAcumulado, nuevoValor) {
        // if (valorAcumulado > nuevoValor) {
        //     return 1;
        // } else if (valorAcumulado == nuevoValor) {
        //     return 0;
        // } else if (valorAcumulado < nuevoValor) {
        //     return -1;
        // }

        return valorAcumulado[i] - nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordernarListaSort)
    return lista;
}