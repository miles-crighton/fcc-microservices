const express = require('express');
const app = express()

const apiRouter = require('./routes/apiRouter');

const bodyParser = require("body-parser")

const PORT = 5000 || process.env.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use('/api', apiRouter);