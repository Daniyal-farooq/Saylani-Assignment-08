let array:number[] = [-90,1,9,1,10,1,100,0,0,-90]
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

//replica freq on string array
let arrfreq:string[] = []
for (let index = 0; index < array.length; index++) {
    arrfreq[index] = `The frequency of ${array[index]} is ${freq[index]}.\n`
    
}
console.log(arrfreq);

let finalStr:string[] = []
for (let index = 0; index < array.length; index++) {
    if (finalStr.indexOf(arrfreq[index]) == -1) {
        finalStr[index] = arrfreq[index]
    }
    
}
console.log(finalStr.join(""));





