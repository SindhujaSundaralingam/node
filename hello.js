const http = require("http");
const hostname = "localhost";
const port = 9000;
const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader("Content-Type", "application/json");
 res.send('{ "message" : "Good Morning, Rise and shine !!!" }');
});

server.listen(port, hostname, () => {
 console.log(`Server running at   http://${hostname}:${port}/`);
});