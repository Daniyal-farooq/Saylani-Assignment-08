var array = [-10, 34, 2, 6, 8, -0, -9234, -46, 2334, 46];
var max = array[0];
var min = array[0];
for (var index = 0; index < array.length; index++) {
    var element = array[index];
    if (element < min) {
        min = element;
    }
    if (element > max) {
        max = element;
    }
}
console.log("The maximum element of array is ".concat(max, "\nand the minimu is ").concat(min));
