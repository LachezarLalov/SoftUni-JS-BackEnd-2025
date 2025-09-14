import fs from "fs";
import zlib from "node:zlib";

const readStream = fs.createReadStream("./lorem.html", {
  encoding: "utf8",
  highWaterMark: 1024,
});

const writeStream = fs.createWriteStream("./gzip-output.txt");
const transformStream = zlib.createGzip();

readStream.pipe(transformStream).pipe(writeStream);
