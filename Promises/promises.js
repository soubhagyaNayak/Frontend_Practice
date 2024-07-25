// let promise1=new Promise((resolve,reject)=>{
//   resolve("Tomorrow i will discuss about dom manipulation")
// });

// promise1.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });

let promise1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("tomorrow i will discuss about dom");
  },5000)
})

promise1.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});