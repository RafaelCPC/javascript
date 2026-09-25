
/*
Ejercicio 5: Crea un script que pida al usuario un numero entero positivo N mayor a 0.
Hay que controlar que el numero introducido sea correcto (que sea entero, que sea
positivo y que sea un número). Si no es así se volverá a pedir.
A continuación debe realizar lo siguiente:
    a) Calcular los divisores del numero N y mostrarlos.
    b) Calcular la suma de los cuadrados de los divisores obtenidos en el paso anterior
    y mostrarla.
    c) Indicar si esa suma es un cuadrado o no (con una frase por pantalla)
*/
    function ej5 () {
        let num = 0;
        do{
           num = parseInt(prompt("Introduce un numero positivo: "));
           if(isNaN(num)|| num < 0 || num%1) {
            alert("No es un valor correcto");
           }
        } while (isNaN(num%1)|| num < 0 || num%1)
            let sum = 0;
            console.log(num)
            console.log(`Divisores: `)
            // a)
            for (let i = 0; i < num; i++) {
                if (num % i == 0) {
                    console.log(i + " ")
                    sum += (i * i)
                }
            }

            // b)
            console.log(`La suma de los cuadrados de los divisores es ${sum}`)

            // c)
            let cuad = Math.sqrt(sum);
            if(Number.isInteger(cuad)) {
                console.log(`${cuad} es un cuadrado`)
            } else{
                console.log(`${cuad} no es un cuadrado`)
            }

    }
    ej5 ();
/*
Ejercicio 7: Crea una página web con un solo botón en el que, al pulsarlo, se le pida al
usuario un año (pej: 1492). A continuación , el programa debe mostrar a través de una
ventana modal a qué siglo pertenece el año introducido.
*/
    function ej7 () {
        let anno = parseInt(prompt("Introduce un año: "));
        alert ("Pertenece al siglo: " + (Math.round(anno/100)))
    }