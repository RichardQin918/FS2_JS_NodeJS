const http = require('http')
const hostname = 'localhost';
const port = process.argv.slice(2)[0]

const server = http.createServer((req, res) => {
  res.end('Hello World\n'); 
});

try {
  server.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}/` + 'ok'); 
  });
}
catch(error) {
  console.error('error: ',error)
}
