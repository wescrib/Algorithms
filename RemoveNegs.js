var arr = [-1,0,3,5,-8,9]
console.log(arr);

for(var i=0,j=0;i<arr.length; i++){
    if(arr[i]>=0){
        arr[j]=arr[i];
        j++;
    }
}
arr.length = j;

console.log(arr);