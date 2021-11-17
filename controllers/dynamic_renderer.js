const isBot = require('../middleware/uAgentMiddleware').isBot
const puppeteer = require('puppeteer')


exports.dynamicRenderer = async (req, res,next) => {
    if (!isBot(req.headers['user-agent'])) {
        console.log("It is Not a Bot")
        return res.redirect('https://www.chirpyest.com/s/yousefloral')
    }
    else {
        console.log("BOOOOOOOOT")
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox','--disable-setuid-sandbox']
          })
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

    }
}