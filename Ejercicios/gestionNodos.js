window.onload = () => {
    let secc = document.querySelector("section");
    let art = secc.querySelectorAll("article");
    console.log(art);
    
    art.forEach(e => {
        secc.removeChild(e);
    });
    /*  no lo borra todo porque es una colección, no un array. Se ajusta automáticamente. 
    Es decir, se carga el [0] la posición [1] pasa al [0] y esa no se borra. Se borra la 
    antigua posición [2]...
    
    for (let i = 0; i < secc.children.length; i++) {
        secc.removeChild(secc.children[i]);
    }

    Solución:
    while(secc.hasChildNodes){      o secc.firstChild != null
        secc.removeChild(secc.firstChild)
    }
    */
}
    