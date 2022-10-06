var array = [48, -19, 23, -19];
var freq = [];
for (var index = 0; index < array.length; index++) {
    freq[index] = 0;
}
for (var index = 0; index < array.length; index++) {
    for (var index2 = 0; index2 < array.length; index2++) {
        if (array[index] == array[index2]) {
            freq[index]++;
        }
    }
}
var unique = [];
for (var index = 0; index < array.length; index++) {
    if (freq[index] == 1) {
        unique.push(array[index]);
    }
}
array = unique;
console.log(array);
