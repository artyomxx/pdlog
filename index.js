'use strict';

const defaults = {
	quiet: () => false
};

const pdlog = (prefix = '', options = {}) => {
	options = Object.assign({}, defaults, options);

	if(typeof options.quiet !== 'function')
		throw new Error('options.quiet should be a function, got:', typeof options.quiet, options.quiet);

	const getPrefix = () => typeof prefix === 'function' ? prefix() : prefix;

	return ['log', 'error', 'warn', 'info', 'debug'].reduce(
		(fx, f) => Object.assign(fx, {
			[f]: (...args) =>
				options.quiet() ||
				console[f].apply(console, [`[${(new Date()).toISOString()}] ${getPrefix()}`.trim()].concat(args))
		}),
		{}
	);
};

if(typeof window === 'undefined')
	module.exports = pdlog;
