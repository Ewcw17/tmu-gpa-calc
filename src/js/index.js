const express = require('express');
const path = require("path")
let app = express();
console.log("here is the path ->"+__dirname)

app.use(express.static(path.join(__dirname,'../')));
// console.log("new path hopefully " + __dirname);
let htmlPath = path.join(__dirname,'../html/')
// app.use(express.static(htmlPath));
app.get('/', (req,res)=>{
    res.sendFile(`${htmlPath}home.html`);
});
app.get('/yeargpa', (req,res)=>{
    res.sendFile( `${htmlPath}cumulgpa.html`);
});

app.listen(4000);