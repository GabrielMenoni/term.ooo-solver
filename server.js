function search(param1, param2){
    return "I made it!"
}

const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3000

const server = http.createServer((req, res) => {
   if(req.url === '/'){
    res.writeHead(200, {'content-type': 'text/html'});
    fs.readFile(path.join(__dirname, 'landing-page.html'), (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error: ' + err);
        } else {
            res.write(data);
        }
        res.end();
    })
   } else if (req.url.endsWith('.css')) {
    res.writeHead(200, {'content-type': 'text/css'});
    fs.readFile(path.join(__dirname, 'styles.css'), (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error: ' + err);
        } else {
            res.write(data)
        }
        res.end();
    })
   } else if (req.url.endsWith('.js')){
    res.writeHead(200, {'content-type': 'text/javascript'});
    fs.readFile(path.join(__dirname, 'scripts.js'), (err, data) => {
        if(err) {
            res.writeHead(404)
            res.write('Error: ' + err);
        } else {
            res.write(data)
        }
        res.end();
    })
   } else if (req.url === '/words' && req.method === 'POST') {
    let data = ''
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', () => {
        const parametros = JSON.parse(data);
        
        const resultado = search(parametros.values, parametros.states)

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({resultado: resultado}));
    });
   } else {
    res.writeHead(404, {'content-type': 'text/plain'});
    res.end('404 Not Found')
   }
})

server.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port: ' + port)
    }
})