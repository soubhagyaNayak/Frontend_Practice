//Find the length of the array

let arr1=[10,20,30,40,50,60];
//console.log(arr1.length);

//push function used with array for adding an element in the end

//arr1.push(70);
//console.log(arr1);

/*pop function is used with array for removing an element from the end
arr1.pop();
console.log(arr1);
*/
//how can we reduce an array length
// arr1.length=4;
// console.log(arr1);

// delete arr1[3];
// console.log(arr1);
// console.log(arr1.length);

//adding the element from the beginning 
// arr1.unshift(5);
//removing the element from the beginning
// arr1.shift();
// console.log(arr1);

// let arr2=[10,20,30,40,50,60];
// let arr3=[70,80,90];
//using the spread operator we can merge two array
// let arr4=[...arr2,...arr3];
// console.log(arr4);

//using spread operator how can we copy an array
// let arr5=[1,2,3];
// let arr6=[...arr5];
// console.log(arr6);


// let arr8=[10,20,30,40,50,60];
// arr8.splice(3,2,70);
// console.log(arr8);

//map function is basically used for  manipulate each and every element

// console.log(
//     [1,2,3,4].map((element,index)=>{
//       return element*100;
//     })
// );

// console.log(
//     [1,2,3,4].map((element,index)=>{
//       return [element];
//     })
// );

// console.log(
//     [1,2,3,4].map((element,index)=>{
//       return [index,element];
//     })
// );

// console.log(
//     [1,2,3,4].map((element,index)=>{
//       return element*100;
//     })
// );


// console.log(
//     [1,2,3,4].filter((element,index)=>{
//       return element>=3;
//     }).map((element,index)=>{
//       return element*100;
//     })
// );

console.log(
    [1,2,3,4,5].map((element,index)=>{
        return {[index]:element};
    })
)
