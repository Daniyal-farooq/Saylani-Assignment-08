var array = [45, 0, 7, 4, 8, 17, 16, 18];
console.log(array.sort(function (a, b) { return a - b; }).filter(function (a) { return a % 2 == 0; }));
console.log(array.sort(function (a, b) { return a - b; }).filter(function (a) { return a % 2 != 0; }));
