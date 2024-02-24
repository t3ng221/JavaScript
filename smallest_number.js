const arr = [9,8,5,4,2,1];

let result = arr[0];
for(i=0;i<=arr.length;i++){
    if(result>arr[i]){
        result=arr[i];
    }
}
console.log(result);