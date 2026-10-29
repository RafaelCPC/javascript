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
    
    /*
        13.- Crea el efecto SPOILER que se puede ver en foros y otros páginas.
        Se oculta el contenido de un elemento (pej, un párrafo) y sólo se muestra el mensaje
        “Mostrar”. Al hacer click sobre dicho mensaje, se muestra el contenido del elemento y
        el mensaje cambia a “Ocultar”. Si se pulsa sobre ese mensaje, el elemento vuelve a su
        estado original (contenido oculto y mensaje “Mostrar”).
    */
   
   let mostrar = document.querySelector("#mostrar");
   let blur = document.querySelector("#ej13").style;

   mostrar.onclick = () => {

    if(blur.filter === "blur(0px)") {
        blur.setProperty("filter","blur(4px)");
        mostrar.textContent = "Spoiler";
    } else{
        blur.setProperty("filter","blur(0px)")
        mostrar.textContent = "Ocultar";  
    }
   }

   /*
 14. Crear un menú vertical con efecto acordeón usando los siguientes apartados:
    • Inicio
        ◦ Portada.
        ◦ Acerca de mi.
        ◦ Mis fotos.
    • Proyectos
        ◦ Web Apps.
        ◦ Mobile Apps.
        ◦ Juegos.
    • Portfolio
        ◦ Páginas webs.
        ◦ Software.
    • Contacto
   */

    let apartado = document.querySelectorAll(".apartado");
    let oculto = document.querySelectorAll(".oculto");
    
    for (let i = 0; i < apartado.length; i++) {
        apartado[i].onclick = () => {
            if(oculto[i].style.display === "none"){
                oculto[i].style.display = "block";
                for (let j = 0; j < oculto.length; j++) {
                    if(j !== i) oculto[j].style.display = "none";
                }
            } else {
                oculto[i].style.display = "none";
            }
        }; 
    }
/*
    16.- Usando las funciones setInterval y clearInterval de Javascript. Coloca
    una etiqueta meter, una etiqueta progress y un botón al lado de cada una. Al pulsar el
    botón se debe simular la “carga” de la barrita. Muestra un mensaje cuando se alcance el
    máximo.
    b) Mejora el ejercicio haciendo que cuando pulsemos uno de los botones, este quede
    bloqueado hasta que la barra del elemento progress/meter se complete del todo.
*/
 let meter = document.querySelector("meter");
 let progress = document.querySelector("progress");
 let carga = document.querySelectorAll(".carga");
 for (let i = 0; i < carga.length; i++) {
    carga[i].onclick = () => {
        let por = 0;
        let intervalo = setInterval( () => {
            if(i === 1) {
                progress.setAttribute("value", por++)
            }
            else {
                meter.setAttribute("value", por++);
            } 
            carga[i].disabled = true;
            if(por === 100) clearInterval(intervalo);
            console.log(por);
            
            
        },100)
        }
    }

    /*
        19.- En HTML, crea una lista de 3 elementos y el botón “Añadir”. Al pulsar sobre el
        botón, se le pide al usuario que meta una cadena de texto y se creará una nueva entrada
        en la lista con el texto indicado.
    */

    /*
        20.- En HTML, crea un párrafo con varias lineas de texto, y tres botones: ‘Generar’,
        ‘Borrar Viejo’ , ‘Borrar Nuevos’ (deshabilitado) y ‘Sustituir’. Nada lleva ID así que no
        puedes usar getElementById
        En CSS, crea dos clases para maquetar el párrafo (pon anchura, altura, borde, tamaño de
        letra…) y haz que el párrafo anterior pertenezca a la primera clase.
        Programa el siguiente funcionamiento de los botones:
        • Generar: cada vez que se pulse, crea un nuevo párrafo similar al que ya existe
        pero maquetado con la segunda clase. Todos los párrafos generados serán
        hermanos.
        • Borrar Viejo: elimina el párrafo que sale por defecto en la página. Al hacer eso,
        este botón y el botón ‘Sustituir’ quedan bloqueados.
        • Borrar Nuevos: este botón está bloqueado al principio y se desbloquea al pulsar
        el botón ‘Generar’. Su cometido es borrar TODOS los párrafos generados por el
        botón generar.
        • Sustituir: este botón sustituye el párrafo inicial por una tabla de dos filas y dos
        celdas con números en su interior. Recuerda que este botón estará bloqueado si
        se borra el párrafo inicial con el botón ‘Borrar Viejo’.
    */
        let but = document.querySelectorAll("#ej20 button");
        let texto = document.querySelector("#ej20 p");
        let copia = "";
        let nuevo = "";
        but[1].setAttribute("disabled", true);
        but[0].onclick= () => {
            nuevo = prompt("Introduce un nuevo texto: ");
            copia = texto.innerText;
            texto.innerText +="\n" + nuevo;
            if(but[1].disabled === true){
                but[1].disabled = false;
            }
        }
        but[1].onclick= () => {
            if(but[1].disabled === false){
                texto.innerText = copia;
                but[1].disabled = true;
            }

        };
        
        but[2].onclick= () => {
            nuevo = prompt("Introduce un nuevo texto: ");
            copia = texto.innerText;
            texto.innerText = nuevo;
            if(but[1].disabled === true){
                but[1].disabled = false;
            }
        };
        /* Creo que quiere que lo hagas creando nuevos child y borrandolos */

    /*
        24.- Crea una lista (<ul>) con varios 7 elementos (<li>) representando tareas
        pendientes. Maquetala para que parezca una lista de tareas de una aplicación (pej,
        alternando para cada elemento el color de fondo y el color del texto blanco y verde).
        Añade varios botones debajo de la lista:
        • Añadir Tarea al Inicio: pide el nombre de la tarea usando prompt y la
        añade al inicio de la lista (debe quedar maquetada).
        • Añadir Tarea al Final: igual que el botón anterior pero añade la nueva
        tarea al final de la lista (debe quedar maquetada).
        • Eliminar Ultima Tarea: Cuando el usuario pulse el botón, debe
        eliminarse el último elemento de la lista.
        • Eliminar Primera Tarea: Igual que el anterior pero ahora se elimina la
        primera tarea de la lista.
        IMPORTANTE: Si ya no hay elementos, debe mostrarse un mensaje por consola
        indicando que la lista está vacía
    */
    let ul = document.querySelector(".ej24 ul");    
    let li = ["Dormir", "Comer", "Trabajar", "Llevar a los niños al cole", "piano", "futbol", "boda"];
    let eli;

    ul.style.setProperty("list-style-position", "inside");
    ul.style.setProperty("width", "800px");
    ul.style.setProperty("padding", "0px");
    ul.style.setProperty("border-radius", "20px");
    ul.style.setProperty("overflow", "hidden");
    ul.style.setProperty("color", "white");

    let cont = 0;
    function tareas () {
        li.forEach(e => {
            eli = document.createElement("li");
            eli.appendChild(document.createTextNode(e));
            ul.appendChild(eli);

            (cont % 2 == 0) ? eli.style.setProperty("background-color", "indianred"): eli.style.setProperty("background-color", "coral");
            eli.style.setProperty("padding", "5px 15px");

            cont++;
        });
    }
    tareas();

    function borrar () {
        for (let i = 0; i < li.length; i++) {
            ul.removeChild(ul.firstChild);
        };
        if(li.length < 2) console.log("No quedan tareas en la lista");
    
    }

   let bot24 = document.querySelectorAll(".ej24 button");
   let nuevo24 = "";

   for (let i = 0; i < bot24.length; i++) {
        bot24[i].onclick = () => {
            if(i < 2) nuevo24 = prompt("Introduce una nueva tarea: ");
            borrar ();
            switch(i){
                case 0: li.unshift(nuevo24); break;
                case 1: li.push(nuevo24); break;
                case 2: li.pop(); break;
                case 3: li.shift(); break;
            }
            tareas(); 
        }
   }


   /*
        25.- Crea el efecto ‘ampliación’ de algunas galerías de fotos que podemos encontrar por
        internet.
        Para empezar, busca una imagen de gran tamaño (unos 1280x720px al menos) y coloca
        la imagen en HTML pero con la mitad de tamaño. Crea el código Javascript necesario
        para que , al hacer click sobre la imagen, suceda lo siguiente:
        • Aparecerá una capa semitransparente de color gris que tapará TODA la parte
        visible de la página y que no se moverá de sitio al hacer scroll.
        • Dentro de esa capa, aparecerá la imagen con su tamaño original centrada tanto
        horizontal como vertical y perfectamente visible.
        • Al hacer click en cualquier punto de la capa, desaparecerá junto con la imagen
        de tamaño original.
        Nota: Haz uso del objeto Screen y/o Window.
        b) Mejora el ejercicio anterior de modo que funcione para cualquier imagen que haya en
        una página. Al hacer click sobre cualquiera de las imágenes de la página, esta aparece
        con su tamaño original dentro de la capa semitransparente que lo cubre todo
   */
  let = document.querySelector(".ej25 img")
}