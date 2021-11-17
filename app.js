const express = require('express')
const app = express()
const puppeteer = require('puppeteer')
const helmet = require('helmet')
const route = require('./routes/route')

app.use(helmet())

app.get('/', (req, res, next) => {
    return res.send("<h1>Hello World</h1>")
})

app.use('/test',route)

app.listen(process.env.PORT || 3000)