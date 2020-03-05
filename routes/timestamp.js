const express = require('express');
const router = express.Router();

router.get('/:date_string?', (req, res) => {
    //Handle timestamp Microservice
    const dateString = req.params.date_string;
    const utcRegex = /\d{4}-\d{2}-\d{2}/g
    const unixRegex = /\d{13}/g

    let dateObj
    if (!dateString) {
        dateObj = new Date()
    } else if (unixRegex.test(dateString)) {
        dateObj = new Date(parseInt(dateString))
    } else if (utcRegex.test(dateString)) {
        dateObj = new Date(dateString)
    }

    console.log(`Calculated date: ${dateObj}`)
    if (dateObj && dateObj !== "Invalid Date") {
        res.send({ unix: dateObj.getTime(), utc: dateObj.toUTCString() });
    } else {
        res.send({ error: "Invalid Date" });
    }
})

module.exports = router;