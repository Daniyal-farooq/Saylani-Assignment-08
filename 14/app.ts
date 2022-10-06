let array:number[] = [48,-19,23,-19]
let freq:number[] = []
for (let index = 0; index < array.length; index++) {
    freq[index] = 0    
}

for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
        if (array[index] == array[index2]) {
            freq[index]++
        }
    }
    
}
let unique:number[] = []
for (let index = 0; index < array.length; index++) {
    if (freq[index] == 1) {
        unique.push(array[index])
    }
    
}
array = unique
console.log(array);


