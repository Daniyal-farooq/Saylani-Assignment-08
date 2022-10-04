let array:number[] = [-10,34,2,6,8,-0,-234,-46,234,46]
let sum:number = 0
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum+=element
    
}
console.log(`The sum of aall the array elements is ${sum}`);
