const fs = require('fs');
// ...............Blocking Sychronosy function.................

const textOut=fs.readFileSync('./tx/input.txt','utf-8');
console.log(textOut);

const text =`this is what we think about avocado ${textOut}, and created at ${Date.now()}`;

const textIn = fs.writeFileSync('./tx/written.txt',text);
console.log('text created successfuly');


// ...............Non-Blocking aSychronosy function.................

fs.readFile('./tx/start.txt','utf-8',(err,data)=>{
    if(err)  return console.log('eror 🔥');
    console.log(data);
    const dataToWrite1=data;
    fs.readFile('./tx/text3.txt','utf-8',(err,data)=>{
        console.log(data)
        const dataToWrite2= data;
        fs.readFile('./tx/written.txt','utf-8',(err,data)=>{
            console.log(data)
            const dataToWrite=data;
            fs.writeFile('./tx/text3.txt',`${dataToWrite} \n${dataToWrite2} \n ${dataToWrite1}`,'utf-8',(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('data written succesfully');
                }
            })
        })
    })
})
console.log('will read file after this line');