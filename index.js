const express = require('express')
const slash = require('./routes/slash')
const app = express()

app.use('',slash)


app.listen(9090,()=>{
    console.log("Server Up an running on PORt 8080");
})