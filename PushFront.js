var n=0;
var arr = [1,2,3,4];
console.log(arr);
for(var i=arr.length-1; i>=0;i--){
    arr[i+1]=arr[i];
}

arr[0]=n;
console.log(arr);
return arr;