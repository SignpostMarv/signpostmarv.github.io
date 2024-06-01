const markdown_it = require('markdown-it');
const markdown_it_task_checkbox = require('markdown-it-task-checkbox');

module.exports = (e) => {
	const md = markdown_it().use(markdown_it_task_checkbox,{
		disabled: true,
		divWrap: false,
		divClass: 'checkbox',
		idPrefix: 'cbx_',
		ulClass: 'task-list',
		liClass: 'task-list-item'
	});

	e.setLibrary('md', md);

	return {
		dir: {
			input: './md/',
			layouts: '../11ty/layouts',
			output: './src/'
		}
	};
};
