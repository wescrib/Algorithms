var arr = [1,2,3,4,5,6,7]
console.log(arr);

var arrLength= arr.length-1
var temp;

for(var i=0; i<arrLength-i;i++){
    temp = arr[i];
    arr[i] = arr[arrLength-i];
    arr[arrLength-i] = temp;
}

console.log(arr);