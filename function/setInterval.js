function fun_one(){
   return "hello";
}
setInterval(function(){
   console.log(fun_one());
},2000);