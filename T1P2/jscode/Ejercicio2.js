window.onload = () => {
    // Nos traemos el div y el boton
    let botones = document.querySelectorAll("input");
    let cont = document.querySelector("#contenedor");

    // Creamos las variables que vamos a usar
    let img; let usImg;

    // Cuando pulsamos Añadir
    botones[0].addEventListener("click", () => {

        // Pedimos el nombre de la imagen al usuario y creamos el elemento
        usImg = prompt("Introduce el nombre de una imagen, por favor : ");
        img = document.createElement("img");

        // Si no se ha introducido un nombre se pone una imagen por defecto, si no se pone la imagen que se pide
        (usImg == "") ? img.src = `img/terra.jpg`: img.src = `img/${usImg}.jpg`;

        // Añadimos la clase a la imagen y la insertamos en el div. Habilitamos Limpiar
        img.classList.add("foto");
        cont.appendChild(img);
        botones[1].removeAttribute("disabled");
    })

    // b) 
    // Cuando pulsamos Limpiar

    botones[1].addEventListener("click", () => {

        // Seleccionamos todas las fotos y las borramos
        let todImg = document.querySelectorAll(".foto");
        todImg.forEach(e => {
            cont.removeChild(e);
        });
    })
}