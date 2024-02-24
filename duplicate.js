let arr = [1,2,3,1,4,5,6];
let dupli = arr[0];
arr.forEach(element => {
    if(element!=dupli){
        element.pop();
    }
    
});
console.log(dupli);