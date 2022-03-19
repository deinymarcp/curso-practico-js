// helpers / utils
function esPar(numerito) {
    return (numerito % 2 == 0);
}

function calcularMediaAritmetica(lista) {    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
      const promedioLista = sumaLista / lista.length;
      return promedioLista;
}

//Calculadora de Mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana general

const salariosVzla = venezuela.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosVzlaSorted = salariosVzla.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralVzla = medianaSalarios(salariosVzlaSorted);

// Mediana del top 10%


const spliceStart = (salariosVzlaSorted.length * 90) / 100;
const spliceCount = salariosVzlaSorted.length - spliceStart;

const salariosVzlaTop10 = salariosVzlaSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Vzla = medianaSalarios(salariosVzlaTop10);

console.log({
    medianaGeneralVzla,
    medianaTop10Vzla
})

