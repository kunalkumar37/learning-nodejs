var assert = require("assert");
assert.equal(50, 50); //OK
assert.equal(50, "50"); //OK
// assert.equal(50, 70);

//the assert.equal() method tests if two values are equal using the == operator
// if the two values are not equal an assertion failure is being caused and the program is terminated

//to compare the values using the === operator use the assert.strictEqual() method
