const calculator = {
     sum(a, b) {
          return a + b;
     },
     multiply(a, b) {
          return a * b;
     },
};

// commonJS export syntax
// module.exports = calculator;

// ESM export syntax
export { calculator };
