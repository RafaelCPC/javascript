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
    let rand = parseInt((Math.random() * 64 + 1))
    celda[rand].classList.add("activa");

    let arriba = document.querySelector(".arriba");
    let abajo = document.querySelector(".abajo");
    let derecha = document.querySelector(".derecha");
    let izquierda = document.querySelector(".izquierda");

    arriba.addEventListener("click", () => {
        if(rand > 7) {
            celda[rand].classList.remove("activa");
            rand -= 8; 
            celda[rand].classList.add("activa");
        }
    })
    abajo.addEventListener("click", () => {
        if(rand < 55) {
            celda[rand].classList.remove("activa");
            rand += 8; 
            celda[rand].classList.add("activa");
        }
    })
    derecha.addEventListener("click", () => {
        if((rand +1) % 8 != 0) {
            celda[rand].classList.remove("activa");
            rand++; 
            celda[rand].classList.add("activa");
        }
    })
    izquierda.addEventListener("click", () => {
        if(rand % 8 != 0) {
            celda[rand].classList.remove("activa");
            rand--; 
            celda[rand].classList.add("activa");
        }
    })

    // D) 
    document.addEventListener("keydown", (e) => {
        if(e.key == "w") {
            if(rand > 7) {
                celda[rand].classList.remove("activa");
                rand -= 8; 
                celda[rand].classList.add("activa");
            }
        }
        if(e.key == "s") {
            if(rand < 55) {
                celda[rand].classList.remove("activa");
                rand += 8; 
                celda[rand].classList.add("activa");
            }
        }
        if(e.key == "d") {
            if((rand +1) % 8 != 0) {
                celda[rand].classList.remove("activa");
                rand++; 
                celda[rand].classList.add("activa");
            }
        }
        if(e.key == "a") {
            if(rand % 8 != 0) {
                celda[rand].classList.remove("activa");
                rand--; 
                celda[rand].classList.add("activa");
            }
        }
    })
}