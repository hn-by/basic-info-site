const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        
        fs.readFile('./index.html', (err, content) => {
            if (err) {
                res.end('hello eror')
            } else {
                res.end(content)
            }
                })
        

    } else {
        let filepath = req.url.split('').slice(1).join('')

        fs.readFile(filepath, (err, content) => {

            if (err) {
                console.log(filepath)
                fs.readFile('./404.html', (err, data) => res.end(data))
            } else {
                res.end(content)
            }

        })


    }


}).listen(3000);