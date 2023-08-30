const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

// I'll be using ejs as my view engine
app.set("view engine", "ejs")
// This is where all of the different views of my files are going to go for my server
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

// I need to tell Express to use expressLayouts
app.use(expressLayouts)
// I need to tell Express where my public files are going to be. 
// Files such as my stylesheets, JavaScript, and images are going to be in public
app.use(express.static('public'))

// Setting up the database connection
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.log(error))
db.connect('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

// I use 3000 as my port number
app.listen(process.env.PORT || 3000)