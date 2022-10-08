var array = [90, 100, 110, 120];
var zero = array[0];
for (var index = 0; index < array.length; index++) {
    array[index] = array[index + 1];
    if (index == array.length - 1) {
        array[array.length - 1] = zero;
    }
}
console.log(array);
