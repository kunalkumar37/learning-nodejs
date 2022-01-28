//convert the string "abc " into a stream of bianry data
// var buf=Buffer.from('ABC');
// console.log(buf);

//the buffer module provides a way of handling streams of binary data

//the buffer object is a global object in node.js
//and it is not necessary to import it using the require keyword

//the syntax for creating an empty buffer of the length 15
// var buf1=Buffer.alloc(15);
// console.log(buf1);

//allocUnsafe()--creates a non zero filled buffer of the specified length
//allocUnsafeSlow--creates a non zero filled and non pooled buffer of the specified length
//byteLength()--returns the numbers of bytes in a secified object
// var buf2=Buffer.allocUnsafe(15);
// console.log(buf2);

//compare()--compares two buffer objects
//concat()--concatenates an array of buffer objects into one buffer object
//copy()--copies the specified number of bytes of a buffer object

//entries()--returns an iterator of "index" "bytes" pairs of a buffer object
//equals()--compares two buffer objects and returns true if it is a match onterwise false
//fill()--fills a buffer object with the sprcified values
//from()--creats a buffer object with the specified values
//includes--checks if the buffer objcet contains the spefcified value returns true if theere is a  match otherwise false


var buf1=Buffer.from('a');
var buf2=Buffer.from('b');
var buf3=Buffer.from('c');
var arr=[buf1,buf2,buf3];
var buf=Buffer.concat(arr);
console.log(buf);


var buf4=Buffer.from("hello and welcome to node.js!!");
console.log(buf4.indexOf('welcome'));
//this method returns -1 if the values to serch for never occurs
//if the sprcifies values occurs more than once only the ostion of the first occurence will be returned

console.log(Buffer.isEncoding("windows-1252"));
console.log(Buffer.isEncoding("utf8"));