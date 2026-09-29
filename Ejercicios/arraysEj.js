/*
    Ejercicio 11. Escribe una función que reciba dos arrays y devuelva un nuevo
    array con elementos que solo aparecen una vez en total (ya sea en el primero
    o en el segundo array). El orden debe ser: primero los que están en el primer 
    array y luego los que están en el segundo

*/
var arrRep = [], arrRes = [] ;
function ej11 (arr1,arr2) {
    // concat y filter la manera fácil
    recArr(arr1);
    recArr(arr2);
}
function recArr (arra) {
    for (const element of arra) {
        let esta = false;
        for (const el of arrRep) {
            if(element === el) esta = true; 
        }
        if(!esta) arrRep.push(element);
    }
    console.log(arrRep);
    
}
let ar1 =[1,2,2,3,5,1];
let ar2 =["Rafa","Juan", "Juan", "Juan", "Juan","Arduino"]
ej11(ar1,ar2);

/*
    Ejercicio 13. Crea un script que filtre una lista de nombres y devuelva otra
    lista solo con los que son amigos tuyos. Como eres una persona muy "especial"
    tu solo eres amigo de aquellas personas cuyo nombre se componga exactamente de
    4 letras
*/
function ej13 () {
    let noms = ["Rafa","Juan", "Pedro","Fran", "Felipe","Arduino"], res = [];
    for (const element of noms) {
        if(element.length === 4) res.push(element);
    }
    console.log(res);
}
ej13();

/*
    Ejercicio 14. Dado un array de numeros enteros (cualquier longitud del array)
    devuelva la suma más grande entre dos números adyacentes
*/
function ej14 () {
    let nums = [3,5,7,2,1,0,20,-5], sum = 0, res = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        sum = nums[i] + nums[i+1];
        if (sum > res) res = sum;
    }
    console.log(res);
}
ej14();

// Hacer de la nueva lista el 18, 23, 24 y 25
/*
Ejercicio 18: El ácido desoxirribonucleico, ADN, es la principal molécula de
almacenamiento de información en los sistemas biológicos. Está compuesto por cuatro
bases de ácido nucleico: guanina ("G"), citosina ("C"), adenina ("A") y timina ("T").
El ácido ribonucleico, ARN, es la principal molécula mensajera de las células. El ARN
difiere ligeramente del ADN en su estructura química y no contiene timina. En el ARN,
la timina se sustituye por otro ácido nucleico, el uracilo ('U').
Cree una función que traduzca una cadena dada de ADN a ARN.
Por ejemplo:
Si se introduce la cadena GCAT, a salida debe ser GCAU
Si se introduce la cadena GCATCGTA, a salida debe ser GCAUCGUA
A tener en cuenta: La cadena de entrada puede tener una longitud arbitraria, incluso
puede estar vacía. Se garantiza que toda cadena de entrada es válida, es decir, que cada
cadena de entrada sólo estará formada por 'G', 'C', 'A' y/o 'T' en cualquier orden.
*/
let adn = "gcatcgtatt";
function ej18 (adn) {
    let arn = adn.toUpperCase();
    for (let i = 0; i < arn.length; i++) {
        arn = arn.replace("T", "U");
    }
    arn = arn.replace("T", "U");
    return arn;
}
console.log(ej18(adn));

/*
Ejercicio 23: Crea una función a la que se le pasa una matriz de números (nos da lo
mismo el tamaño) y un número.
a) La función debe devolver si el numero indicado está en la matriz o no.
b) La función debe devolver si el numero indicado está en la matriz y la posición
en la que está. Si el número no está, devolverá la posición -1, -1
*/
function ej23 (nums, n) {
    let res = "el numero no está en la matriz"
    let esta = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
  
            if(nums[i][j] === n && !esta) {
                res = `el numero está en la matriz en la posicion ${i}, ${j}`;
                esta = true;
            }
            else if (!esta) res = "el numero no está en la matriz. La posicion es -1, -1"
        }
    }
    return res;
}
let nums = [[1,2,3], [4,5,6], [7,8,9]]; let n = 8;
console.log(ej23(nums, n));

/*
Ejercicio 24: Crea un programa que genere una matriz 3X4 de números enteros
aleatorios entre 10 y 40 (ambos incluidos). A continuación debe mostrar por consola:
• Suma total de todos los elementos de la matriz.
• Media de todos los elementos de la matriz.
• El mayor y el menor de todos los elementos.
• La cantidad de números pares e impares que tiene.
• La suma de cada fila de la matriz
*/
function ej24 () {
    // (Math.random()*(3 - 1 + 1) +1) (max - min + 1)) + min
    let fil = new Array (3);
    let col = new Array (4);
    let mat =new Array (col, fil); let sum = 0; let cont = 0; let min = Infinity; let max= -Infinity; let par = 0; let imp = 0;
    let fila = "";
    for (let i = 0; i < mat.length; i++) {
        let sumFil = 0;
        for (let j = 0; j < mat[i].length; j++) {
            mat[i][j] = Math.floor((Math.random()*(40 - 30 + 1) + 30));
            sum += mat[i][j];
            sumFil += mat[i][j];
            cont++;
            if (mat[i][j] < min) min = mat[i][j];
            if (mat[i][j] > max) max = mat[i][j];
            (mat[i][j] %2 == 0) ? par++ : imp++;
        }
        fila += sumFil + ", ";
        
    }
    return `La suma total es ${sum}, la media es ${sum/cont}, el mayor es ${max}, el menor es ${min}. Hay ${par} pares y ${imp} impares. La suma de cada fila es ${fila}`
}
console.log(ej24());

/*
Ejercicio 25: Una clase tiene 4 alumnos y cada alumno ha realizado 5 exámenes. Las
notas se almacenan en una matriz donde:
• cada fila representa a un alumno
• cada columna representa un examen
Puedes crear la matriz “a mano” en el código. Llama a es matriz: “notas”.
Crea un programa que calcule:
• La media de cada alumno.
• Cuantos alumnos tienen la media igual o superior a 5
• Que alumno tiene la media más alta.
*/