var array1 = [10, 11, 12, 13, 14];
var even = array1.filter(function (a) { return a % 2 == 0; });
console.log(even);
var odd = array1.filter(function (a) { return a % 2 != 0; });
console.log(odd);
