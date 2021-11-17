const express = require('express')
const router = express.Router()
const dynamicRenderer = require('../controllers/dynamic_renderer')



router.get('/',dynamicRenderer.dynamicRenderer)

module.exports = router