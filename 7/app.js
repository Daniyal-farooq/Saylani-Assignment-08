var array = [34, 0, 232, 45, 4 - 5, -100, 45];
var count = 0;
for (var index = 0; index < array.length; index++) {
    var element = array[index];
    if (element < 0) {
        count++;
    }
}
console.log("There are ".concat(count, "-ve numbers in the array."));
