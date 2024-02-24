let arr = [1,2,3,1,4,5,6];
let dupli = arr.filter(function(value,index,array){
    return array.indexOf(value)!== index
});
console.log(dupli);