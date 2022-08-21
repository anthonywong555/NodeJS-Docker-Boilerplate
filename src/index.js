'use strict';

import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("Howdy");
})

app.listen(PORT, () => console.log(`Listening on ${PORT}.\nNode Environment is on ${process.env.NODE_ENV} mode.`));