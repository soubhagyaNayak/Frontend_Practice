let arr=[];
function fun_one(){
    return "hello";
}

for(let i=0;i<=5;i++){
    arr.push(fun_one());
}
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.length);
