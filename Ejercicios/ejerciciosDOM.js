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
/*
10.- Crea tres DIV de tamaño 100x100px y con un color de fondo diferente cada uno.
Al pasar por encima de alguno de esos DIVs, el color de fondo de la página debe
cambiar al color que tenga el DIV sobre el que está el cursor del ratón.
b) Añade el código necesario para que el color de la página vuelva a su color
original si el cursor del ratón no está encima de ninguno de los DIVs del ejercicio.
*/

window.onload = () => {
    let diva= document.querySelectorAll(".ej10");

    diva.forEach(e => {
        let estilo = window.getComputedStyle(e).getPropertyValue("background-color");
        let bodEst = window.getComputedStyle(document.body).getPropertyValue("background-color");
        e.onmouseover = () => {
            document.body.style.setProperty("background-color", estilo)
        }
        e.onmouseleave = () => {
            document.body.style.setProperty("background-color", bodEst)
        }
    });


/*
11.- Crea tres DIV de tamaño 300x100px con un color de fondo distinto cada uno y con
un texto en su interior que indique “Soy el DIV X” (siendo X un número del uno al
tres).
a) Oculta el segundo DIV usando la propiedad visibility de CSS. Consigue
que ese DIV “vuelva a aparecer” sí y solo sí, el cursor del ratón se coloca en el
primer DIV.
b) Oculta el segundo DIV usando la propiedad display de CSS. Consigue que
ese DIV “vuelva a aparecer” sí y solo sí, el cursor del ratón se coloca en el
primer DIV.
*/

    let divb= document.querySelectorAll(".ej11");
    divb[1].style.setProperty("visibility", "hidden");
    divb[0].onmouseover = () => {
        divb[1].style.setProperty("visibility", "visible");
    }
    divb[0].onmouseleave = () => {
        divb[1].style.setProperty("visibility", "hidden");

    }
/*
    divb[1].style.setProperty("display", "none");
    divb[0].onmouseover = () => {
        divb[1].style.setProperty("display", "block");
    }
*/

/*
12.- Coloca una imagen dentro de un DIV con position: absolute. Crea dos botones:
• Al pulsar uno de ellos la imagen debe moverse 5px hacia la derecha de la
pantalla.
• Al pulsar el otro, la imagen debe moverse 5px hacia la izquierda de la pantalla.
Nota: Recuerda la posicion (0,0) de la pagina web al usar top/left/right/bottom
b) Mejora el ejercicio haciendo que la imagen no pueda salirse de los limites de la
pantalla. Nota: realiza el cálculo a ojo, ya aprenderemos a obtener las medidas de la
página correctamente.
c) Realizar el mismo ejercicio pero esta vez la imagen se moverá hacia la derecha
mientras el ratón esté encima de ella. Coloca un botón para resetear los valores de
posición de la imagen.
*/

    // a)
    /*
    let imag = document.querySelector("#ej12").style.getPropertyValue("left");
    let izq = parseInt(imag);
    document.querySelector("#izq").onclick = () => {
        izq -= 5;
        document.querySelector("#ej12").style.setProperty("left", `${izq}px`);
    }
    document.querySelector("#der").onclick = () => {
        izq += 5;
       document.querySelector("#ej12").style.setProperty("left", `${izq}px`);
    }
    document.querySelector("#cent").onclick = () => {
        document.querySelector("#ej12").style.setProperty("left", imag);
        izq= 0;
    }
    */
    //b)
    /*
    let imag = document.querySelector("#ej12").style.getPropertyValue("left");
    let izq = parseInt(imag);
    if(izq >= 5){
        document.querySelector("#izq").onclick = () => {
            izq -= 5;
            document.querySelector("#ej12").style.setProperty("left", `${izq}px`);
        }
        document.querySelector("#der").onclick = () => {
            izq += 5;
        document.querySelector("#ej12").style.setProperty("left", `${izq}px`);
        }
        document.querySelector("#cent").onclick = () => {
            document.querySelector("#ej12").style.setProperty("left", imag);
            izq= 0;
        }
    } else {izq = 5}
     */
    // c)
    let imag = document.querySelector("#ej12").style.getPropertyValue("left");
    let izq = parseInt(imag);

    document.querySelector("#ej12").onmousemove = () => {
        izq += 5;
       document.querySelector("#ej12").style.setProperty("left", `${izq}px`);
    }
    document.querySelector("#cent").onclick = () => {
        document.querySelector("#ej12").style.setProperty("left", imag);
        izq= 0;
    }
}