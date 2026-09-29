let matriz = [[], [], []];
let matriz2 = [[], [], []];

let columnas = 3;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < columnas; j++) {
        if (i%2 == 0) matriz[i][j] = 12;
        else matriz[i][j] = 1; 
    }
}
let res = "";
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if((matriz[i][j] >= 1) && (matriz[i][j] < 10)){
            res += `0${matriz[i][j]} `
        } 
        else {
            res += `${matriz[i][j]} `;
        }
    }
    res += " \n";
}
console.log(res);
