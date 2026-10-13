function ejercicio4 (){
    // a)
    let matriz = []; let resb = ""; let resc = 0; let copia = []; let copiab = ""; let num1 = 0; let inter = [];
    let mate = ""; let copiae = "";
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i].push(Math.floor(Math.random()*(20 - 2 + 1) + 2))
        } 
    }

    //b)

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] < 10) resb +="0" + matriz[i][j] + " "
            else resb += matriz[i][j] + " ";
        }
        resb += "\n";
    }
    console.log(`B: \n${resb}`);
    
    // c)
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            resc += matriz[i][j]
        } 
    }
    console.log(`C: ${resc}`);
    
    //d)
    for (let i = 0; i < 3; i++) {
        copia[i] = [];
        for (let j = 0; j < 3; j++) {
            if(matriz[i][j] > 10) copia[i][j] = 9;
            else copia[i][j] = matriz[i] [j];
        } 
    }

    for (let i = 0; i < copia.length; i++) {
        for (let j = 0; j < copia[i].length; j++) {
            if(copia[i][j] < 10) copiab +="0" + copia[i][j] + " "
            else copiab += copia[i][j] + " ";
        }
        copiab += "\n";
    }
    console.log(`D - Copia: \n${copiab}`);

    // e)
    // Como se resta 1 al asignar el valor a la variable se repite el while si es entre 0-2
    do {
        num = prompt("Introduce un numero entre 1 y 3 incluidos: ") -1;
        if(num < 0 || num > 2 || isNaN(num)) alert("No has introducido un número entre 1 y 3")
    } while (num < 0 || num > 2 || isNaN(num))

    

    for (let j = 0; j < matriz[num].length; j++) {
        inter.push(matriz[num][j]);
        matriz[num][j] = copia[num][j]
    }

    for (let j = 0; j < matriz[num].length; j++) {
        copia[num][j] = inter[j]
    }

    for (let i = 0; i < copia.length; i++) {
        for (let j = 0; j < copia[i].length; j++) {
            if(matriz[i][j] < 10) mate +="0" + matriz[i][j] + " ";
            else mate += matriz[i][j] + " ";
            if(copia[i][j] < 10) copiae +="0" + copia[i][j] + " ";
            else copiae += copia[i][j] + " ";
        }
        mate += "\n";
        copiae += "\n";
    }
    console.log(`E - matriz: \n${mate}`);
    console.log(`E - Copia: \n${copiae}`);
}
