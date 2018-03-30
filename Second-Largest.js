var arr = [4,6,10,2,0,9,8];

var max = arr[0];
var max2 = arr[0]

for(var i=1; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i];
    }
    if(arr[i]> max2 && arr[i]!=max){
        max2 = arr[i];
    }
}

console.log(max);
console.log(max2);