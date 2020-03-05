const express = require('express');
const router = express.Router()
const timestampMicro = require('./timestamp');

router.use('/timestamp', timestampMicro)

module.exports = router