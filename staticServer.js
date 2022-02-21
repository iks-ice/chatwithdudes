const {readFile} = require("fs/promises");
const path = require("path");

module.exports = async function (url, res) {
  try {
    const ext = url.slice(url.lastIndexOf(".") + 1);
    const mime = getMimeType(ext);
    if (!mime) {
      throw new Error(`no mime type for ext: ${ext}`)
    }
    const content = await readFile(path.resolve("client", "dist", url.slice(1)), {
      encoding: mime.startsWith("image") ? null : "utf-8",
    });
    res.statusCode = 200;
    res.setHeader("Content-Type", mime)
    return res.end(content);
  }
  catch(err) {
    console.log(err);
  }
}

const mimeTypes = {
  png: "image/png",
  jpg: "image/jpg",
  css: "text/css",
  js: "text/javascript",
};
function getMimeType(ext) {
  return mimeTypes[ext];
}