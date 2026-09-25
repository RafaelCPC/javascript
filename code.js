function saludar () {
    console.log("Hola, soy el SOP...");
    // Google penaliza poner CSS/HTML/JS en el mismo archivo
    // por lo que, aunque se pueda, es recomendable tenerlo
    // en documentos separados

/*
    Como JS es un lenguaje centrado en web la manera correcta de 
    que el usuario meta información es a través de los formularios
    Como no vamos a ver formularios ahora, vamos a usar otra manera 
    en desuso
*/
    let edad = parseInt(prompt ("Dame tu edad: ", "20"));
    // parseFloat
    edad += 20;
    alert(`Ahora eres 20 años más viejo. Tienes ${edad} años`)

    confirm("Está usted seguro?"); // si el usuario acepta se manda un bool T, si no F
}
function saludar2 () {
    alert("Felicidades! Has ganado un Iphone");
}

saludar();


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
           num = prompt("Introduce un numero positivo: ");
        } while (isNaN(num%1)|| num < 0)
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
