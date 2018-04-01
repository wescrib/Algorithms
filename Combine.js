//only works if arrays are equal

var arr1 = [1,3,5,7,9,11,13];
var arr2 = [2,4,6,8,10,12,14];

var l = arr1.length+arr2.length;

for(var i=0, j=0; i<l; i++){
    // console.log(arr2.length)
    if(arr2[j]>arr1[i] && arr2[j]<arr1[i+1]){
        arr1.splice(i+1,0,arr2[j]);
        j++;
    }
    if(i == arr1.length && j<=arr2.length){
        arr1.push(arr2[j]);
    }
}
console.log(arr1);