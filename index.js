'use strict';

const pdlog = (prefix = '') =>
	['log', 'error', 'warn', 'info', 'debug'].reduce(
		(fx, f) => Object.assign(fx, {[f]: (...args) => console[f].apply(console, [typeof prefix === 'function' ? prefix() : `[${(new Date()).toISOString()}] ${prefix}`.trim()].concat(args))}),
		{}
	);

if(typeof window === 'undefined')
	module.exports = pdlog;
