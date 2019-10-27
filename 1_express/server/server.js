const port = 80;
const express = require('express') 
const app = express();
app.get('/', (req, res) => { 
  res.send('Hello World')
});
app.listen(port, () => { 
  console.log('ok on ' + port)
});