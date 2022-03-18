
console.group("Cuadrado");
// Código del cuadrado
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm <br>`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado mide ${perimetroCuadrado}cm <br>`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado mide ${areaCuadrado}cm^2 <br>`);

console.groupEnd();


console.group("Triangulo");
// Código del Triangulo
let ladoTriangulo = 5;
let ladoTriangulo2 = 3;
let baseTriangulo = 4;

let alturaTriangulo = 10;
console.log(`La altura de mi triangulo es de ${alturaTriangulo}cm`)

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
console.log(`Los lados del triangulo son: ${ladoTriangulo}, ${ladoTriangulo2} y ${baseTriangulo} y su perímetro es de ${perimetroTriangulo}cm <br>`);

const areaTriangulo = (baseTriangulo*alturaTriangulo) / 2;
console.log(`El área de nuestro triangulo es de ${areaTriangulo}cm^2`)

console.groupEnd();


console.group("Círculo");
// Código del Círculo

// Radio
const radioCirculo = 5;

// Diámetro
const diametroCirculo = radioCirculo * 2;

// PI
const pi = Math.PI;
// console.log(`${pi}`)

// Circunferencia
const perimetroCircunferencia = diametroCirculo * pi;

// Área
const areaCirculo = (radioCirculo * radioCirculo) * pi;

console.log(`El radio de nuestro circulo es: ${radioCirculo}cm, el diámetro de nuestro círculo es de ${diametroCirculo}, el perímetro de nuestro círculo es de ${perimetroCircunferencia} y el área sería de ${areaCirculo}`)

console.groupEnd();