//if two objects or their child objects are not equal(both in value and type ) an error is thrown and the program is terminated
var assert=require('assert');
var x={a:{n:0}};
var y={a:{n:0}};
var z={a:{n:'0'}};
assert.deepStrictEqual(x,y);
// assert.deepStrictEqual(x,z);
