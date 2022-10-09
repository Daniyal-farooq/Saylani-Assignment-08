var array = [90, 100, 110, 120];
var last = array[0];
for (var index = 0; index < array.length; index++) {
    array[index] = array[index + 1];
    if (index == array.length - 1) {
        array[index] = last;
    }
}
console.log(array);
