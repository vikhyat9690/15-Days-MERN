const b = new Buffer.from('abcdxyz');

console.log(b.toString());
b.write('Other');
console.log(b.toString())
