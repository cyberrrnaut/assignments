const fs= require('fs');


const message = "Go get some sleep bro";

fs.writeFile("a.txt",message,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Data successfully written on a.txt file");
    }
})