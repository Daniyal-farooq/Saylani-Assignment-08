let array:number[] = [90,100,110,120]

let last:number = array[0]
for (let index = 0; index < array.length; index++) {
    
    array[index] = array[index+1]
    if (index == array.length-1) {
        array[index] = last
    }
}
console.log(array);
