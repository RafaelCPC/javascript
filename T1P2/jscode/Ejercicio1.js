window.onload = () => {
    // Nos traemos los div y los botones
    let izqDiv = document.querySelector("#ladoIzq");
    let derDiv = document.querySelector("#ladoDer");
    let sal = document.querySelector("#salida");
    let botones = document.querySelectorAll(".botones");

    // declaramos las variables que vamos a utilizar
    let res; let rand; let rand2; let seg;

    // Cuando se pulsa Añadir
    botones[0].addEventListener("click", () => {

        // Se elimina el número que hubiera con anterioridad si lo hubiera
        if (sal.textContent != "") {
            sal.textContent = "";
        }

        // Generamos los números de manera aleatoria y los añadimos al div
        rand = parseInt(Math.random()*50 + 1);
        izqDiv.textContent = rand;

        rand2 = parseInt(Math.random()*50 + 1);
        derDiv.textContent = rand2

        // desabilitamos Añadir y habilitamos Limpiar
        botones[0].setAttribute("disabled", "true");
        botones[1].removeAttribute("disabled");
        
        // b)

        // Establecemos un intervalo en el que se van generando nuevos números aleatorios y se borran los anteriores
        seg = setInterval (() => {
 
            rand = parseInt(Math.random()*50 + 1);
            izqDiv.textContent = rand;

            rand2 = parseInt(Math.random()*50 + 1);
            derDiv.textContent = rand2
        }, 100)
    })

    // Cuando se pulsa Limpiar, se dejan de sacar numeros aleatorios y se coloca el numero mayor en Salida
    botones[1].addEventListener("click", () => {
        (rand > rand2 || rand == rand2) ? sal.textContent = rand : sal.textContent = rand2; 
        
        clearInterval(seg);

        // Deshabilitamos Limpiar y volvemos a habilitar Añadir
        botones[1].setAttribute("disabled", "true");
        botones[0].removeAttribute("disabled");
    })
}