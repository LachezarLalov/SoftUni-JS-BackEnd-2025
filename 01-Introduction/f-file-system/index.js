import fs from "fs";
import fsPromises from "fs/promises";

// Synchronous reading
const loremText = fs.readFileSync("./input.txt", { encoding: "utf8" });

// // Assynchronous with callback
fs.readFile("./input.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    return console.log(err.message);
  }

  console.log(`Callback: ${data}`);
});

// Asynchronous with Promise
const promiseResult = await fsPromises.readFile("./input.txt", {
  encoding: "utf8",
});
console.log(`Promise: ${promiseResult}`);

// Read directory
console.log("Directory listing:");
const dirList = await fsPromises.readdir("./");
console.log(dirList);

// Remove directory if exists
if (dirList.includes("testDir")) {
  await fsPromises.rmdir("testDir");
  console.log("Directory testDir removed.");
}

// Create directory
console.log("Creating dir...");
async function createDir(dirName) {
  await fsPromises.mkdir(`./${dirName}`);

  console.log(`Directory ${dirName} created.`);
}
createDir("testDir");

// Rename dir or file
// await fsPromises.rename("testDir", "testDir2");
// await fsPromises.rename("input.txt", "input.txt.bak");

// Creating file
await fsPromises.writeFile("newInput.txt", "Lorem ipsum dolor is SO COOL!!!", {
  encoding: "utf8",
});
console.log("File newInput.txt created.");

// Deliting file
await fsPromises.unlink("newInput.txt");
console.log("File newInput.txt deleted.");
