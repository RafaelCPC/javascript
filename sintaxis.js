//Variables

// let - var

let num = 0;
var otra = 90;
console.log(num);
console.log(otra);

if ( otra < 100) {
    let res = 250;
    res += otra;
}
// console.log(res); 
/* da error por el scope con let, pero no con var
 Es un mal hábito definir variables globales. 
Es recomendable tenerlas siempre en funciones
Var no se salta completamente el scope, solo hasta que llega al nivel de función.
Además, Var nos permite declarar las variables en el fondo del archivo
y se siguen pudiendo usar con anterioridad, pero como undefined
*/
i = 10;
console.log(i);
// console.log(a);

var i = 3;
let a = 2;

/* Tipos de datos

    - Number = + - * / % -- ++ += -= == === < > <= >=
    - String - Template String +
    - Boolean && ||
    
    - Object
*/
let num1 = 90;
console.log(typeof(num1));

let num2;
console.log(typeof(num2));

let stri = "asd'asdd'f";
console.log(typeof(stri));

let bool = true;
console.log(typeof(bool));

// Numeros especiales

// let numi = Infinity + 8; // infinito y -infinity
// let nan = NaN; // not a number

/////

 let edad = 70;
 let titulo = "mendigo";
 let numer = "Salvador es un marqués de 55 años de edad";
 let otras = "2" + "5";

console.log("Salva es un " + titulo + " con " + edad + " años");
 console.log(`Salva es un 
    ${titulo} con 
    ${edad} años`);     // el template conserva el salto de línea
console.log(otras);

let age = (3 < 7) && (num <= 10)
if ((3 < 7) && (num <= 10)){
    console.log("es verdadero");
    
}

let numero = 0;
switch (numero) {
    case 1: 
        break;
    case 2:
        break;
    default:
}

// Vamos a aprender 4 for diferentes a lo largo del curso
for (let i = 0; i < 5; i++) {
    console.log(i);   
}

let f = 0;
while (f < 7) {
    console.log(i);
    f++;
}

do {

} while (f < 7);

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 7; j++) {
        console.log(`${i}, ${j}`);
    }
    
}

/* Coerción de Tipos en JS
JS pasa el tipo de una variable a otro sin avisar. 

    Implícita
*/
let una = 4;
let otra = "2";

let res = una+otra; //"42"
console.log(res);

let res = una-otra; //2
console.log(res);

let res = (0 == "0"); // da T

let una = 43;
let otra = true + true + true;
let res = una + otra;
console.log(res); // 46

let una = 43;
let otra = "0";
let res = una || otra;
console.log(res); // 43 con el OR se queda con la primera variable que sale
// si la primera que sale no tiene nada, se queda con la segunda

let una = 43;
let otra = "";
let res = una && otra;
console.log(res); //"" se va a quedar con la que no tiene nada

let res = "2" + "2" - 2;
console.log(res); //20 

let res = "10" + "texto" + 5 ;
console.log(res); //"10texto5"

let res = 10 + "";
console.log(res); //"10" 

let una = 0;
let res = !una;
console.log(res); //True 

let una = 2;
let res = !una;
console.log(res); //False

/* 
== != -> aquí se aplica la coerción de tipos  
 === !== -> aquí no es que no se aplique, pero como comparamos tipos sale diferente
 Como no se puede restar con cadenas se pasa a números
 Como sí se puede concatenar, se concatena en vez de sumar
 La solución es convertir de las muchas maneras que hay el valor
 en el tipo que queramos
    Explícita
 Para forzar la transformación

    String()
    Number()
    Boolean()
*/
let una = 2;
let otra = false;
let res = "cadema";
console.log(String(una)); //"2"
console.log(Boolean(una)); //"True" mientras no sea 0 siempre da true

/*
 Arrays
Hay dos formas de definirlos. La antigua:
    let lista = new Array(5);
 */
let lista = new Array(5);
for (let i = 0; i < lista.length; i++) {
    lista [i] = 6;
}
lista[2] = 9;
lista[0] = 4;

lista[8] = 88; // 
/*
 JS te crea los cajones, no da error de IndexOutOfBOunds
 Los array funcionan como los ArrayList de Java, por eso esta
 es la forma antigua
 */
console.log(lista);

let lista = new Array ("Jaime", "Miguel", 45, -98, true, "adió");
// como las variables no tienen tipo esto se puede hacer sin problemas

// lo recorremos con un array. Tambien tenemos for of
for (let i = 0; i < array.length; i++) {
    console.log(lista[i]);
}
for (const cajon of lista) {
    console.log(cajon);
}
/*
    La manera en la que se definen normalmente los Array en JS es con JSON
*/
let lista = [];
lista [2] = 9;
lista [0] = 4;
console.log(lista);

let lista = [];
const tam = 7;
let mayor = 8;
let menor = 2;
// si lo iniciamos vacío no llegaría a entrar en el for. Podemos asignarle un 
// tamaño específico o hacerlo de otra manera
for (let i = 0; i < tam; i++) {
    lista[i]= parseInt(Math.random() * (mayor-menor+1) + menor); // una manera aunque no la mejor
    // también podemos hacer
    lista.unshift(i);
}

/*
    La manera buena de inicializarlo es con un for of (?) no lo vamos a ver todavia
*/

let res = lista.push(28); // se añade sin problemas en el final
lista.unshift(22); // se añade en la primera posición

console.log(res); // Devuelve el tamaño del array

let res = lista.pop()
console.log(res); // Elimina el último y devuelve el que ha quitado

let res = lista.shift()
console.log(res); // Elimina el primero y devuelve el que ha quitado

let otra = [2,3,4];
lista.reverse() // invierte el array
let res = lista + otra;
console.log(res); //transforma todo en cadena y muestra las dos cadenas

// si queremos unir una lista con otra hacemos lo siguiente
let res = otra.concat(lista);
console.log(res);
console.log(typeof(res)); // objeto

