const list = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
]

const listaCount = {};

list.map(
    function (elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }
)

const listArray = Object.entries(listaCount).sort(
    function (valorAcumulado, nuevoValor) {
        valorAcumulado - nuevoValor
    }
);

console.log(listArray);