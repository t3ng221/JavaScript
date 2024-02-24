let arr=[1,2,5,8,9,22,55,66,7,888,8997,34,32,76,65];
let largest=arr[0];
arr.forEach(element => {
    if(largest<element){
        largest=element;
    }
});
console.log(largest);