function ejercicio3 () {
    let posi = []; let num = 0; let resb = ""; let resc= 0; let numd = 0; let esta = false; let primpos = 0; let ultpos = 0; let cont = 0;
    let res = "No está ese número"; let ultimo = 0;
    // a)
    do{
      num = parseInt(prompt("Introduce un número positivo, por favor: ")); 
      if(num > 0) posi.push(num); 
      else {alert("No se ha introducido un numero positivo")}
    } while (num > 0 || isNaN(num));
    
    // b)
    for (const e of posi) {
        resb += e + " ";
    }
    console.log(`B: `+ resb);

    // c)
    for (const e of posi) {
        resc += e;
    }
    console.log(`C: `+ resc);

    // d)
    do {
        numd = prompt("Introduce un número entero positivo");
    } while (numd < 1 || isNaN(num));

    // e)
    for (let i = 0; i < posi.length; i++) {
        if (posi[i] == numd ){
            if(!esta){
               esta = true; 
               primpos = i;
               res = `La primera posición es ${primpos}. `;
            }
            cont++;
        }   
    }
    for (let i = 0; i < posi.length; i++) {
        if (posi[i] == numd ){
            ultimo++;
            if(ultimo == cont) {
                ultpos = i;
                res += `La ultima posición es ${ultpos}. `;
            }
        }  
         
    }
    console.log(res);
}