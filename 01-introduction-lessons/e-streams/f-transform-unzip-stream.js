import fs from "fs";
import zlib from "node:zlib";

const readStream = fs.createReadStream("./gzip-output.txt", {
  highWaterMark: 1024,
});

const writeStream = fs.createWriteStream("./unzip-output.txt", {
  encoding: "utf8",
});
const transformStream = zlib.createGunzip();

readStream.pipe(transformStream).pipe(writeStream);
