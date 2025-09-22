import fs from "fs";

const readStream = fs.createReadStream("./lorem.html", {
  encoding: "utf8",
  highWaterMark: 1024,
});

readStream.on("data", (chunk) => {
  console.log("----- NEW CHUNK -----");

  console.log(chunk);
});

readStream.on("end", () => {
  console.log("----- STREAM ENDED -----");
});
