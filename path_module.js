const path = require('path');
const fs = require('fs');
// console.log(path.extname(__filename))

// //read file

// fs.readFile('notes.txt','utf8',(err,data)=>{
//     console.log(err,data)
// }) // works at last because non blocking


// console.log(fs.readFileSync('notes_2.txt').toString()) //works first beacause blocks everything

// console.log("======testing print=====") //works second in seq

fs.writeFile("notes_2.txt","This was new data =====",(err,data)=>{
    console.log(err,data) //data is undefined in read, while error is none
});
console.log("====fininshed all======")