console.log(salarios);


// Análisis personal para Juanita




function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);

    // const persona = salarios.find((persona) => {
    //     return persona.name == personaEnBusqueda
    // });
    // return persona;
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elementos) {
        return elementos.salario;
    })

    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    console.log(medianaSalarios);
    return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];
    
    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcenajeCrecimiento = crecimiento / salarioPasado
        porcentajesCrecimiento.push(porcenajeCrecimiento)
    }

    const medianaPorcenajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento)

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcenajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}


//Análisis Empresarial

const empresas = {}

for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {}
        }

        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

console.log({empresas});


function medianaEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else if (!empresas[nombre][year]) {
        console.warn('La empresa no dio salarios ese año');
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year);
        }); // [800,900,200]

        let porcentajesCrecimiento = [];
    
    for (let i = 1; i < listaMedianaYears.length; i++) {
        const salarioActual = listaMedianaYears[i];
        const salarioPasado = listaMedianaYears[i - 1];
        const crecimiento = salarioActual - salarioPasado;
        const porcenajeCrecimiento = crecimiento / salarioPasado
        porcentajesCrecimiento.push(porcenajeCrecimiento)
    }

    const medianaPorcenajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimaMediana * medianaPorcenajesCrecimiento;
    const nuevaMediana = ultimaMediana + aumento;

    return nuevaMediana;
    }
}


// Análisis general
function medianaGeneral() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    
    const mediana = PlatziMath.calcularMediana(listaMedianas);

    return mediana;
}

function medianaTop10() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;
    
    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);

    //slice -> no modifica el array original
    //splice -> toma los valores del array original y los guarda en uno nuevo

    const medianaTop10 = PlatziMath.calcularMediana(top10);
    return medianaTop10;
}