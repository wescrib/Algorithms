var arr = [1,1,1,1,1,1,1,1,1,1,2,3];

var sum = 0;

for(var i=0,j=0; i<arr.length; i++){
    if(j<10){
        sum += arr[i];
        j++;
    }
    if(j==10){
        j=0;
        arr[i+1]=sum;
        i++
        sum = 0;
    }
}
if(sum != 0){
    arr.push(sum)
}

console.log(arr);