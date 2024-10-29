const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World! Con variables de entorno');
});


let config = {
    hostname: process.env.EXPRESS_HOST,
    port: process.env.EXPRESS_PORT
}
app.listen(config, () => {
  console.log(`Example app listening at http://${config.hostname}:${config.port}`);
});