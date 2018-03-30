var arr = [];

var sum = 0;

for(var i=0,j=0; i<arr.length; i++){
    if(j<10){
        sum += arr[i];
        j++;
    }
    if(i%10==0 && i!=0){
        j=0;
        arr.splice(i,0,sum);
        sum = 0;
    }
}
if(sum != 0){
    arr.push(sum)
}

console.log(arr);