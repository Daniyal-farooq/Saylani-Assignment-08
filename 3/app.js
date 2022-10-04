var array = [-10, 34, 2, 6, 8, -0, -234, -46, 234, 46];
var sum = 0;
for (var index = 0; index < array.length; index++) {
    var element = array[index];
    sum += element;
}
console.log("The sum of aall the array elements is ".concat(sum));
