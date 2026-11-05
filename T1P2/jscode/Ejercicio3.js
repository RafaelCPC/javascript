window.onload = () => {
    
    // Nos traemos el boton y el div
    let bot = document.querySelector("input");
    let sol = document.querySelector(".solucion");

    // creamos las variables que vamos a usar
    let fil; let cel; let tabla; let fila; let celda;

    bot.addEventListener("click", () => {

        // Volvemos a pedir los valores si no son correctos
        do{
        fil = prompt("Introduce el número de filas, por favor : ");
        } while (fil > 10 || fil < 1);

        do{
        cel = prompt("Introduce el número de celdas, por favor : ");
        } while (cel > 10 || cel < 1);

        // Creamos la tabla y añadimos la clase
        tabla = document.createElement("table");
        tabla.classList.add("tabla");

        // Creamos las celdas y las filas. Las insertamos en la tabla
        for (let i = 0; i < fil; i++) {
            fila = document.createElement("tr");

            for (let j = 0; j < cel; j++) {
                celda = document.createElement("td");
                celda.textContent = i + 1;
                fila.appendChild(celda);
            }

            tabla.appendChild(fila);
        }

        // Insertamos la tabla en el div
        sol.appendChild(tabla);
    })
}