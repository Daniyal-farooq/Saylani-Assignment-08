let array:number[] = [-10,34,2,6,8,-0,-9234,-46,2334,46]
let max:number = array[0]
let min:number = array[0] 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element < min){
        min = element
    }
    if (element > max){
        max = element
    }
}
console.log(`The maximum element of array is ${max}\nand the minimu is ${min}`);
