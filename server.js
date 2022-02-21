const http = require("http");

const server = http.createServer(require("./requestHandler.js"));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server is running on ${PORT}`))