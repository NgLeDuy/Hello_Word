const express = require('express')
const app = express();


app.get('/', (req, res)=> 
{
    res.send("Hello World");
});

console.log("Hello World");

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>{
    console.log('Express start on http://localhost:3000')
});