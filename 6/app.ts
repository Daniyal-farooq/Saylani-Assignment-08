let array:number[] = [34,0,232,45,4-5,-100,45]
let even:number = 0
let odd:number = 0
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element%2 == 0){
        even++
    }
    else{
        odd++
    }
}
console.log(`There are ${even} even elements and ${odd} odd elements in the array.`);
