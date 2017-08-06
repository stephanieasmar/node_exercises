const fs = require('fs');
const http = require('http');
const server = http.createServer( (req, res) => {
    console.log(req.url);
    let UrlPath = 'index.html';
    if (req.url != '/') {
        urlPath = req.url.slice(1);
    }
    fs.readFile(urlPath, (err, buffer) => {
        if (err) {
            res.end();
            return;
        }
        res.end(buffer.toString());
    })
});

server.listen(8887, () => {
    console.log('HERE I AM! I AM RUNNING...');
});