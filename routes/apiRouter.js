const express = require('express');
const router = express.Router()
const timestampMicro = require('./timestamp');
const headerParserMicro = require('./headerParser');
const shortUrlMicro = require('./shortUrl')

router.use('/timestamp', timestampMicro);
router.use('/whoami', headerParserMicro);
router.use('/shorturl', shortUrlMicro);

module.exports = router