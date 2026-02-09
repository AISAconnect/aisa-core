const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    system: "AISA",
    status: "online",
    message: "AISA Core is running"
  }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`AISA Core running on port ${PORT}`);
});
