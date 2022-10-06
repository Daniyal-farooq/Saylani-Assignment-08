let array:number[] = [4,-10,9,-905,5,6,70,9,0] 
let freq:number[] =[]
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
console.log(freq);
for (let index = 0; index < array.length; index++) {
    if (freq[index] == 1) {
        console.log(array[index]);
        
        
    }
    
}


