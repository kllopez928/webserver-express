const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type': 'aplication/json' });

    let salida = {
        nombre: 'Kevin',
        edad: 23,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();
}).listen(2020);

console.log('Escuchando por el puerto 8080');