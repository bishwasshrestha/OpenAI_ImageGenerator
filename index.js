const { urlencoded } = require('express')
const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3000
const app = express()
const path = require('path')
//enable body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/openai',require('./routes/openaiRoute'))

//set static folder
app.use(express.static(path.join(__dirname, 'public')))
 
app.listen(PORT,()=> console.log(`server running on port ${PORT}`))
