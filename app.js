const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Kabanero CP4A 4.3!");
});
 
module.exports.app = app;
