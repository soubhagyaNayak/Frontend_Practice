// let arr1=[10,20,30,40,50];
// let arr2=[...arr1];
// console.log(arr2);


// console.log(
//     [1,2,3,4,5].filter((element,index)=>{
//         return element>=3;
//     }).map((element,index)=>{
//         return element*100;
//     })
// );


//arr1.push(60);
// arr1.unshift();
// arr1.shift();
// console.log(arr1);

// arr1.splice(0,1,5);
// console.log(arr1);



// console.log(
//     [1,2,3,4].map((element,index)=>{
//        return [element,index];
//     })
// );




console.log(
    [10,20,30,40,50].reduce((firstElement,accumulator)=>{
          return firstElement+accumulator;
    })
);