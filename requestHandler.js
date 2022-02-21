const {readFile} = require("fs/promises");
const staticServer = require("./staticServer.js");

module.exports = async function (req, res) {
  const {url} = req;
  console.log(req.url);
  if(url.startsWith("/assets")) {
    return staticServer(url, res);
  }
 
  if (url.startsWith("/api")) {
    
  }
  try {
    const content = await readFile("./client/dist/index.html", "utf-8");
    res.setHeader("Content-Type", "text/html");
    res.end(content);
  } catch (error) {
    console.log(error);
  }
}