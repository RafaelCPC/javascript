/*  Ejercicio DOM 1

    a) pide una nueva anchura, una nueva altura, actualiza esos valores

    b) pide un valor y se lo suma al grosor del borde

    c) rotación entre: centro izquierda derecha

    Crea un DIV con el número 0 en su interior. Bajo el DIV, coloca dos botones: Uno para sumar
    y otro apra restar.
    Se suma uno o se resta uno
*/
// a)
function a () {
    let anchura = parseInt(prompt("Introduce una nueva anchura: "));
    let altura =parseInt(prompt ("Introduce una nueva altura: "));

    let a = document.getElementsByTagName("table");
    a[0].setAttribute = ("height", `${altura}px`);
    a[0].width = `${anchura}px`;   
}

// b)
function b () {
    let borde = parseInt(prompt ("Aumenta el borde en: "));

    let b = document.getElementsByTagName("table")
    // otra forma
    // let antiguo = parseInt(tabla.getAttribute("border"));
    // tabla.border = antiguo + incremento + "px";
    b[0].border =`${parseInt(b[0].border) + borde}px`;
}

// c)
function c () {
    let c = document.getElementsByTagName("table")
    
    if (c[0].align == "center") c[0].align = "left";
    else if (c[0].align === "left") c[0].align = "right";
    else if (c[0].align === "right") c[0].align = "center";
}

function suma () {
    document.getElementById("cero").innerText++;
}
function resta () {
    document.getElementById("cero").innerText--;

}