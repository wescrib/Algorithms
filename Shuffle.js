
var arr = [0,1,2,3,4,5,6,7]

var temp;
var r;
var l = arr.length

for(var i=0; i<l; i++){
    console.log(Math.floor(Math.random()*l))
    r = Math.floor(Math.random()*l);
    tmp = arr[r];
    arr[r] = arr[i];
    arr[i] = tmp;
}
console.log(arr);