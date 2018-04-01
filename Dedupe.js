
var arr = [8,7,5,1,7,8,2];

function dedupe(arr){

    var l=arr.length+1;

    for(var i=0, j=0;j<arr.length; i++){

    
        if(i==arr.length-1){
            i=0;
            j++;
        }
        if(arr[i]==arr[j] && i!=j){
            
            for(var k=i; k<arr.length; k++){
                arr[k]=arr[k+1];
            }
            l--;
            
        }
    }
    arr.length = l ;
    return arr;
    //below code is a one-liner....
    // return Array.from(new Set(arr));
}

console.log(dedupe(arr));