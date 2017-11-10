## pdlog

Yet another JS log module with prefixes made of a custom string and a timestamp.

---

#### Installation:
`npm i --save pdlog`

#### Usage:
```js
const c = require('pdlog')('#WHATEVER');
c.log('hello world');
```
_Output:_
```
[2017-07-31T15:49:57.161Z] #WHATEVER hello world
```

#### Methods:
- log()
- error()
- warn()
- info()
- debug()

#### Custom prefix function (well, why not!)
```js
const c = require('pdlog')(() => Date.now())
c.log('hello world');
```
_Output:_
```
685051200000 hello world
```
_* function's result will be used without the built-in date prefix_


#### Options:

**quiet:** `<function>`

**Why function?** Because you probably want to have an ability to switch it on or off dynamically.

```js
let quietMode = false;
const c = require('pdlog')('quiet check', {quiet: () => quietMode});

c.log('you will see this');

quietMode = true;

c.log('you will not see this');
```
