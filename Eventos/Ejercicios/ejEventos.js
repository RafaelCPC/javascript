window.onload= () => {
    let tab = document.querySelector(".tablero");
    let celda = document.querySelectorAll(".celda");
    let limp = document.querySelector(".boton-limpiar");
    let estilo = window.getComputedStyle(celda[0]).getPropertyValue("background-color");

    let colores = ['red','green', 'blue', 'yellow'];
    let i = 0;
    let colEl = colores[i]; 


    // A)
        // tab.addEventListener("click", (e) => {
        //     if (e.target != e.currentTarget){
        //     e.target.style.backgroundColor = "cadetblue";
        //     }
        // })

        limp.addEventListener("click", () => {
            celda.forEach(el => {
                el.style.setProperty("background-color", estilo);
            });
        })

    // B)
        document.body.addEventListener ("contextmenu", (e) => {
            e.preventDefault();
            if (i < colores.length - 1) i++;
            else i = 0;
            colEl = colores[i]; 
        })
        tab.addEventListener("click", (e) => {
            if (e.target != e.currentTarget){
            e.target.style.backgroundColor = colEl;
            }
        })

    // C) 
    let rand = parseInt((Math.random() * 46 + 1))
    // Añadir clase Activo celda[rand].addC
}