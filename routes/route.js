const express = require('express')
const router = express.Router()
const dynamicRenderer = require('../controllers/dynamic_renderer')
const goToNormal = require('../middleware/goToNormal')


router.get('/',dynamicRenderer.dynamicRenderer)

module.exports = router