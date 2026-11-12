/*
    Crea un Boton en HTML y asocia la función que hay abajo
    pide dos números enteros (a y b)
    Descubrir cual es el mayor y cual es el menor
    Crea un array con valores que van desde el menor
    hasta el mayor
*/

function dosNum () {
    let num1, num2;
    do {
        num1 = parseInt(prompt("Introduce un número: "));
    } while (isNaN(num1));

    do {
        num2 = parseInt(prompt("Introduce otro número: "));
    } while (isNaN(num2) || num2 === num1);

    //let menor = Math.min(num1,num2)
    //let mayor = Math.max(num1,num2)
    // Otra manera de sacar el mayor y el menor
    
    if (num2 > num1) {
        psh(num1,num2);
    } else {
        psh(num2,num1); 
    }
    console.log(arr);
}
function psh (n,m) {
        for (let i = n; i <= m; i++) {
            arr.push(i);  
        }
}
var arr = [];