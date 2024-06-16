//slice function
let arr1=[10,20,30,40,50,60,70];
arr1.splice(arr1.findIndex((element,index)=>{
    return element==30;
}),1);
console.log(arr1);


