let array:number[] = []
for (let index = 0; index < 10; index++) {
    let str:string|null = prompt("Enter the vaulue of array")
    // let str2:string = str.toString()
    array[index] = parseInt(str)
}
console.log("******The values are as follows******");
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}

