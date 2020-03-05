const express = require('express');
const router = express.Router()
const timestamp = require('./microservices/timestamp');
const headerParser = require('./microservices/headerParser');
const shortUrl = require('./microservices/shortUrl');
const exercise = require('./microservices/exercise');
const fileAnalyse = require('./microservices/fileAnalyse');

router.use('/timestamp', timestamp);
router.use('/whoami', headerParser);
router.use('/shorturl', shortUrl);
router.use('/exercise', exercise);
router.use('/fileanalyse', fileAnalyse)

module.exports = router