/*
 Implementa el efecto ROLLOVER sobre una imagen: al pasar el ratón por encima,
cambia la imagen. Al sacar el cursor fuera, la imagen vuelve a su estado original.
*/

function cambiar () {
    let img = document.querySelector("img");
    img.setAttribute("src", "../Image/FblthpLostontheRangecopy.webp");
    // img.src = "../Image/FblthpLostontheRangecopy.webp";

}
function recuperar () {
    let img = document.querySelector("img");
    img.setAttribute("src", "../Image/1.Fblthp-Bluer.png");
    // img.src = "../Image/1.Fblthp-Bluer.png";
}

/*
6.- Crea cinco botones y coloca como value un color diferente a cada uno. Cada vez
que se pulse uno de los botones, el fondo de la página debe cambiar al color indicado
por ese botón.
*/
function cambColor(i){
    let color = document.getElementsByTagName("button");
    let value = color[i].getAttribute("value");

    document.body.style.setProperty("background-color",value);
}

/*
4.- Crea una galería de fotos (al menos 5 fotos) que posea un botón para avanzar y otro
para retroceder.
• El botón para avanzar hará que se muestre la siguiente foto cada vez que se
pulse. Si se llega al final de la lista de imágenes, el botón deja de funcionar.
• El botón para retroceder hará que se muestre la foto anterior cada vez que se
pulse. Si se llega al principio de la lista de imágenes, el botón deja de funcionar.

b) Mejorar el ejercicio haciendo que el botón correspondiente se deshabilite
cuando se alcanza el final/principio de la lista de fotos.
*/
let i = 0; let imgs = ["../Image/1.Fblthp-Bluer.png", "../Image/borborygmos-and-fblthp.jpg", "../Image/FblthpLostontheRangecopy.webp", "../Image/GTC_Totally_Lost_960x540.jpg", "../Image/samuel-matthews-finish-4-final-uplox.jpg"];
function retroceder () {
    let img = document.getElementById("carrusel");
    if(i > 0) img.setAttribute("src", imgs[i--]);
    else i = 0;
}

function avanzar () {
    let img = document.getElementById("carrusel")
    if(i < imgs.length)img.setAttribute("src", imgs[i++]);
    else i = imgs.length -1;
}