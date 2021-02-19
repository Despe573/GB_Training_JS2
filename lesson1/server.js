const fs = require('fs');
const http = require('http');

const server = http.createServer(function (req, res) {
    let body = null;

    try {
        body = fs.readFileSync(`./site/${req.url}`);
    } catch (err) {
        body = fs.readFileSync('./site/index.html');
    }

    res.end(body);
})

const port = process.env.PORT || 1313;
server.listen(port);
console.log(`Server started on port - ${port}`);