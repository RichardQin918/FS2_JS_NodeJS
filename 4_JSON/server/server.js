const port = 8008;
const express = require('express') 
const querystring = require('querystring');
const app = express();
const array = [
  {"firstName": "Richard"},
  {"lastName": "Qin"},
  {"email": "richardqin918@gmail.com"},
  {"address": "21 Iceboat"},
  {"phone": "12345678"},
  {"verified": true},
]
app.get('/', (req, res) => { 
  let result = 'notFound'
  if (req.query.key) {
    for (item in array) {
      if (array[item][req.query.key] && array[item][req.query.key] !== '') {
        result = array[item][req.query.key] 
      }
    }
    
  }
  let date = new Date().getTime()
  let url = req.url
  

  res.status(200).json({
    date: date,
    url: url,
    result: result
  }).end()
});


app.listen(port, () => { 
  console.log('ok on ' + port)
});