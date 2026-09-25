/*
    Ejercicio 11. Escribe una función que reciba dos arrays y devuelva un nuevo
    array con elementos que solo aparecen una vez en total (ya sea en el primero
    o en el segundo array). El orden debe ser: primero los que están en el primer 
    array y luego los que están en el segundo
*/
var arrRep = [], arrRes = [] ;
function ej11 (arr1,arr2) {
    recArr(arr1);
    recArr(arr2);
}
function recArr (arra) {
    let esta = false;
    for (const element of arra) {
        for (const el of arrRep) {
            if(element === el) {
               esta = true; 
            }
        }
        if(!esta){
            arrRes.push(element);
        }
    }
    console.log(arrRes);
    
}
let ar1 =[1,2,2,3,5,1];
let ar2 =["Rafa","Juan", "Juan", "Juan", "Juan","Arduino"]
ej11(ar1,ar2);

/*
    Ejercicio 13. Crea un script que filtre una lista de nombres y devuelva otra
    lista solo con los que son amigos tuyos. Como eres una persona muy "especial"
    tu solo eres amigo de aquellas personas cuyo nombre se componga exactamente de
    4 letras
*/
function ej13 () {
    let noms = ["Rafa","Juan", "Pedro","Fran", "Felipe","Arduino"], res = [];
    for (const element of noms) {
        if(element.length === 4) {
            res.push(element);
        }
    }
    console.log(res);
}
ej13();

/*
    Ejercicio 14. Dado un array de numeros enteros (cualquier longitud del array)
    devuelva la suma más grande entre dos números adyacentes
*/
function ej14 () {
    let nums = [3,5,7,2,1,0,20,-5], sum = 0, res = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = nums[i] + nums[i+1];
        if (sum > res){
            res = sum;
        }
    }
    console.log(res);
}
ej14();