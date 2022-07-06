const express = require('express')

var router = express.Router()

router.get('/',(req,res)=>{
    res.send('/ get called')
})

router.get('/home',(req,res)=>{
    res.send('/home Called')
})

router.get('/about',(req,res)=>{
    res.send('/about Called')
})

router.get('/contact',(req,res)=>{
    res.send('/contact Called')
})


module.exports = router