const fs= require("fs");


function clearExtraSpaces(str){
    return str.replace(/\s+/g, ' ').trim();
}

const filePath= "c.txt";

function readAndWrite(){

 fs.readFile(filePath,"utf-8",(err,data)=>{
    if(err){
        console.log("Read error: ", err);
    }

    const clearedMess= clearExtraSpaces(data);

    fs.writeFile(filePath,clearedMess,(err)=>{
        if(err){
            console.log("Write Error:", err);
        }
    })
 })   
}

readAndWrite();