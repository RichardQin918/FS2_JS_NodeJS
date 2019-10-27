const port = 80;
const express = require('express') 
const querystring = require('querystring');
const app = express();
app.get('/', (req, res) => { 
  let name = 'empty'
  let value = 'empty'
  if (req.query.name) {
    name = req.query.name
  }
  if (req.query.value) {
    value = req.query.value
  }
  let date = new Date().getTime()
  let url = req.url
  

  res.status(200).json({
    date: date,
    url: url,
    name: name,
    value: value
  }).end()
});


app.listen(port, () => { 
  console.log('ok on ' + port)
});