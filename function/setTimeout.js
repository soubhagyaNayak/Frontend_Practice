function fun_one(){
    return "hello";
};
for(let i=1;i<5;i++){
    setTimeout(function(){
        console.log(fun_one());  
      },5000);
}
