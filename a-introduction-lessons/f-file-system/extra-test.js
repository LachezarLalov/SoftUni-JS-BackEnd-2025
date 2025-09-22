setTimeout(() => {
  console.log("Hello world");
}, 0);

const result = await Promise.resolve(21);
console.log(result);
