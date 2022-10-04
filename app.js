var array = [];
for (var index = 0; index < 10; index++) {
    var str = prompt("Enter the vaulue of array");
    // let str2:string = str.toString()
    array[index] = parseInt(str);
}
console.log("******The values are as follows******");
for (var index = 0; index < array.length; index++) {
    console.log(array[index]);
}
