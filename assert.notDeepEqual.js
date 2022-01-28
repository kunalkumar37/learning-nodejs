// if two objects and their child objects are equal an error is thrown and the program is terminated
var assert=require('assert');
var x={a:{n:0}};
var y={a:{n:0}};
var z={a:{n:1}};
assert.notDeepEqual(x,z);
assert.notDeepEqual(x,y);
//if the two objects are equal an assertion failure is being caused and the program is teminated
// to compare the objects using the !== operator use the 