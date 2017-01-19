let http = require('http')

setInterval(_ => {
  console.log(process.memoryUsage().heapUsed / 1000000)
}, 100)

http.createServer((req, res) => {
  require('unirest').get('http://localhost:3001').timeout(3000).end(function(r) {
    res.writeHead(r.error ? 500 : 200)
    res.write(r.error ? r.error.message : r.body)
    res.end()
  })
}).listen(3000)
