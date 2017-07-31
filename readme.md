## pdlog

Yet another JS log module with prefixes made of a custom string and a timestamp.

---

#### Installation:
`npm i --save pdlog`

#### Usage:
```
	const c = require('pdlog')('#WHATEVER');
	c.log('hello world');

//	Output:
//	[2017-07-31T15:49:57.161Z] #WHATEVER hello world
```

#### Methods:
- log()
- error()
- warn()
- info()
- debug()

#### Custom prefix function (well, why not!)
```
	const c = require('pdlog')(() => Date.now())
	c.log('hello world');
//	Output:
//	685051200000 hello world
```
_* function's result will be used without the built-in date prefix_
