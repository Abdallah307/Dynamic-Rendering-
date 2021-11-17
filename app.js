const express = require('express')
const app = express()
const puppeteer = require('puppeteer')
const helmet = require('helmet')

app.use(helmet())

app.get('/', (req, res, next) => {
    return res.send("<h1>Hello World</h1>")
})

app.use('/test', async (req, res, next) => {
    console.info("rendering the page in ssr mode")
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    try {
        await page.goto(
            'http://chirpyest.com/s/yousefloral',
            {waitUntil:'networkidle0'}
        )
    }
    catch(err) {
        console.error(err)
        throw new Error("page not found / propblem occured")
    }

    const html = await page.content()
    await browser.close()

    return res.status(200).send(html)

})

app.listen(process.env.PORT || 3000)