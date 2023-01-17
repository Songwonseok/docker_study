const express = require("express");

// Constants
const PORT =8083;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('안녕하세요~');
});

app.listen(PORT, HOST)
console.log(`Running on https://${HOST}:${PORT}`);
