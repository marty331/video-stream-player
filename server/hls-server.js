const http = require('http');
var fs = require('fs');

const PORT = 4000;

http.createServer(function (request, response) {
    console.log('request starting...', new Date(), request.complete);

    const headers = {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:4000',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
    };
    if (request.method === 'OPTIONS') {
        respose.writeHead(204, headers);
        response.end();
        return;
    }

    var filePath = '/Users/marty331/Movies/videos/second' + request.url;
    console.log(filePath);;
    fs.readFile(filePath, function (error, content) {
        response.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
        console.log('video started')
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('./404.html', function (error, content) {
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
                response.end();
            }
        }
        else {
            console.log('video ended')
            response.end(content, 'utf-8');
        }
    });
}).listen(PORT);
console.log(`Server listening PORT ${PORT}`);
