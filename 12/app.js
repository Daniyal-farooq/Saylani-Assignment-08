var array = [4, -10, 9, -905, 5, 6, 70, 9, 0];
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
for (var index = 0; index < array.length; index++) {
    if (freq[index] == 1) {
        console.log(array[index]);
    }
}
