    // Cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado()

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();


    // Triangulo

function perimetroTriangulo( lado1, lado2, base ) {
    return lado1  + lado2 + base;
}

function areaTriangulo( base , altura) {
    return (base * altura) / 2
}


    // Circulo

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}


// Aqui interactuamos con el html
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}