let array:number[] = [34,0,232,45,4-5,-100,45]
let count:number = 0
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element < 0){
        count++
    }
}
console.log(`There are ${count}-ve numbers in the array.`);
