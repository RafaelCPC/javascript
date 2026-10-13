function ejercicio2 () {
    let susp = 0; let apr = 0; let notab = 0; let sobre = 0; let nota = 0;
    for (let i = 0; i < 10; i++) {
        nota = prompt("Introduce la nota, por favor: ")
        if(nota < 5 && nota >= 0) susp++;
        else if (nota >= 5 && nota < 7) apr++;
        else if (nota >= 7 && nota < 9) notab++;
        else if (nota >= 9 && nota <= 10) sobre++;
        else {
            alert ("La nota introducida no es correcta. Introduce una nota correcta")
            i--;
        }
    }
    alert(`El número de suspensos es ${susp}, el de aprobados es ${apr}, el de notables es ${notab} y el de sobresalientes es ${sobre}`)
}