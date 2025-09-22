import fs from "fs";

const readStream = fs.createReadStream("./lorem.html", {
  encoding: "utf8",
  highWaterMark: 1024,
});

const writeStream = fs.createWriteStream("./output.txt", {
  encoding: "utf8",
  flags: "a",
});

delete writeStream.write;
readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

readStream.on("end", () => {
  writeStream.end();
  console.log("----- STREAM ENDED -----");
});
