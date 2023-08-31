const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// All authors route
router.get('/', (req, res) => {
    res.render('authors/index')
})

// New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author()})
})

router.post('/', (req, res) => {
    res.send('Create new author')
})

module.exports = router