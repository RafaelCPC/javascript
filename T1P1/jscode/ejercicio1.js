function ejercicio1() {
    let num = 0;
    do {
        num = prompt("Introduce un valor positivo, por favor: ")
        if(num < 1 || isNaN(num)) alert("El valor tiene que ser un numero entero positivo");
    } while (num < 1 || isNaN(num))
    let res = "";
    (num > 9999 && num < 100000 && num % 2 == 0) ? res = "Es un número MEDAC" : res = "No es un número MEDAC";
    alert(res);
}