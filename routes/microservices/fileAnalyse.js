const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const file = req.files.upfile

    if (file) {
        const name = file.name;
        const size = file.size;
        const type = file.mimetype;
        res.send({ name, size, type });
    } else {
        res.send({ error: "No file with name 'uptime' found" })
    }
});

module.exports = router