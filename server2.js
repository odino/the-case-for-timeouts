let http = require('http')

let i = 0

http.createServer((req, res) => {
  let delay = 100
  if (i % 10 === 0) {
    delay = 10000
  }

  i++

  setTimeout(_ => {
    res.writeHead(200)
    res.write('Hello!')
    res.end()
  }, delay)
}).listen(3001)
