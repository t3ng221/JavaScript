// print an array
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
console.log(arr);
// access array elements
console.log(arr[5])
//find length
let arrLen = arr.length;
console.log('Array Length: '+ arrLen);
//find last element
console.log('Last Element: '+ arr[arrLen-1]);
//find first element
console.log('First Element: '+ arr[0]);
//find middle element
if(arrLen%2 == 0){
    let half = arrLen/2;
    console.log('Middle Array: '+ arr[half]);
}
else{
    console.log(arr[(Math.floor(arrLen/2))]);
}
//Modifying the element
console.log('Previous Element: '+arr[2]);
arr[2]= 99;
console.log('Modified Element: '+ arr[2]);
//Adding new elements Push method
arr.push('Siam');
console.log(arr);

//Removing last element
arr.pop();
console.log(arr);

//Removing 1st element
arr.shift();
console.log(arr);

console.log('Previous Array: '+arr)
arr.splice(2,4);
console.log(arr);

//concat

const arr2 =['s','tv','limited'];
console.log(arr.concat(arr2));