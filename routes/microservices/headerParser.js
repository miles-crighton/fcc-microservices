const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const ipaddress = req.connection["remoteAddress"];
    const language = req.headers["accept-language"];
    const software = req.headers["user-agent"];
    res.send({ ipaddress, language, software })
});

module.exports = router