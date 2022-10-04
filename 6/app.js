var array = [34, 0, 232, 45, 4 - 5, -100, 45];
var even = 0;
var odd = 0;
for (var index = 0; index < array.length; index++) {
    var element = array[index];
    if (element % 2 == 0) {
        even++;
    }
    else {
        odd++;
    }
}
console.log("There are ".concat(even, " even elements and ").concat(odd, " odd elements in the array."));
