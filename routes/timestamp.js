const express = require('express');
const router = express.Router();

router.get('/:date_string?', (req, res) => {
    //Handle timestamp Microservice
    var dateString = req.params.date_string;
    console.log(dateString)
    res.send('Hey')
})

module.exports = router;