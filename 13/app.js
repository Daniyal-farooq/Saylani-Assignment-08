var array = [10, 1, 90, 10, 46, 90, 0, 1, 0];
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
console.log(freq);
var duplicateElements = [];
for (var index = 0; index < array.length; index++) {
    if (freq[index] != 1) {
        if (duplicateElements.indexOf(array[index]) == -1) {
            duplicateElements.push(array[index]);
        }
    }
}
console.log(duplicateElements);
