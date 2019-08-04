var evaluate = require('../index.js');
var parse = require('esprima').parse;

var src = process.argv.slice(2).join(' ');
var ast = parse(src).body[0].expression;

console.log(evaluate(ast));
