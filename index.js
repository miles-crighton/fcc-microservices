const express = require('express');
const app = express()

const apiRouter = require('./routes/apiRouter');

const PORT = 5000 || process.env.port;

app.use(require("body-parser").json())

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use('/api', apiRouter);