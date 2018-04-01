var s = "timit";

var l=s.length;

for(var i=0, j=l-1; i<l/2; i++,j--){
    if(s[i]!=s[j]){
        console.log("ITS NOT");
        return false;
    }
}

console.log("IT IS");
return true;