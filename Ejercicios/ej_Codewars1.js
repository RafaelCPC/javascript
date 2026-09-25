function sumArr () {
    let arr = [2,23,12,-5,-15,-7,28];
    let sum = 0;
    for (const element of arr) {
        if(element > 0) {
            sum += element; 
        }
    }
    console.log(`La suma de todos los valores positivos es ${sum}`);
}
sumArr();