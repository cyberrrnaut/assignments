const fs= require('fs');



fs.readFile("a.html","utf-8",function(err,data){
   if(err){
    console.log(err);
    return;
   }
   for(let i=0;i<=10000000000;i++){ // expensive operation
    if(i==10000000000){
        console.log(i);
    }
   }
    console.log(data);
})