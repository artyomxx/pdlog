'use strict';

const test = require('tape'),
	pdlog = require('./index.js'),
	methods = ['log', 'error', 'warn', 'info', 'debug'];


test('all log functions exist', t => {
	let cs = pdlog();

	methods.forEach(m => t.ok((typeof cs[m] === 'function'), m + ' function exists'));

	t.end();
});


test('prefix string works', t => {
	let cs = pdlog('#fancyprefix'),
		oldConsole = {};

	methods.forEach(m => {
		oldConsole[m] = console[m];

		console[m] = (...args) => {
			oldConsole[m].apply(console, args);
			return args.join(' ');
		};

		t.ok(cs[m]('hello').includes('#fancyprefix'), `prefix exists in console.${m} output`);

		console[m] = oldConsole[m];
	});

	t.end();
});


test('prefix function works', t => {
	let cs = pdlog(() => 'wow'),
		oldConsole = {};

	methods.forEach(m => {
		oldConsole[m] = console[m];

		console[m] = (...args) => {
			oldConsole[m].apply(console, args);
			return args.join(' ');
		};

		t.ok(cs[m]('hello').includes('wow'), `result of the prefix function is in console.${m} output`);

		console[m] = oldConsole[m];
	});

	t.end();
});


test('options.quiet works', t => {
	let cs = pdlog('something you wouldn\'t see', {quiet: () => true}),
		oldConsole = {};

	methods.forEach(m => {
		oldConsole[m] = console[m];

		console[m] = (...args) => {
			oldConsole[m].apply(console, args);
			return args.join(' ');
		};

		t.ok(cs[m]('hello') === true, `console.${m} output is empty`);

		console[m] = oldConsole[m];
	});

	t.end();
});
