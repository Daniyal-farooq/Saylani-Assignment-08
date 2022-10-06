var array = [-90, 1, 9, 1, 10, 1, 100, 0, 0, -90];
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
//replica freq on string array
var arrfreq = [];
for (var index = 0; index < array.length; index++) {
    arrfreq[index] = "The frequency of ".concat(array[index], " is ").concat(freq[index], ".\n");
}
console.log(arrfreq);
var finalStr = [];
for (var index = 0; index < array.length; index++) {
    if (finalStr.indexOf(arrfreq[index]) == -1) {
        finalStr[index] = arrfreq[index];
    }
}
console.log(finalStr.join(""));
