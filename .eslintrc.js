module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'react/no-array-index-key': 'warn',
		'react/require-default-props': 'off',
	},
};
