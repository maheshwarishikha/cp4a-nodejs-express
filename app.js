const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Kabanero CP4A!");
});
 
module.exports.app = app;
