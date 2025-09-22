import fs from "fs";

const readStream = fs.createReadStream("./lorem.html", {
  encoding: "utf8",
  highWaterMark: 1024,
});

const writeStream = fs.createWriteStream("./output.txt", {
  encoding: "utf8",
  flags: "a",
});

readStream.pipe(writeStream);
