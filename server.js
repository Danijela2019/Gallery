const express = require('express');
const app = express();


app.use(express.static('public'))


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
 });
 app.get("/gallery1", (req, res) => {
    res.sendFile(__dirname + '/gallery1.html');
 });
 app.get("/gallery2", (req, res) => {
    res.sendFile(__dirname + '/gallery2.html');
 });
 

 
 const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Starting the server at ${port}`);
});