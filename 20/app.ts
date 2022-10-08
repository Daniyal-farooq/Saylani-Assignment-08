let array:number[] = [45,0,7,4,8,17,16,18]
console.log(array.sort((a,b)=> a-b).filter(a => a%2==0));
console.log(array.sort((a,b)=> a-b).filter(a => a%2!=0));