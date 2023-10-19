module.exports = {
	settings: {
		react: {
			version: 'detect',
		},
	},
	env: {
		browser: true,
		amd: true,
		node: true,
		es2021: true,
		'jest/globals': true,
	},
	extends: [
		'airbnb',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended', // Make sure this is always the last element in the array.
		'plugin:jest/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['simple-import-sort', 'prettier', 'jest'],
	rules: {
		'no-underscore-dangle': 0,
		'prettier/prettier': ['error', {}, { usePrettierrc: true }],
		'react/react-in-jsx-scope': 'off',
		'jsx-a11y/accessible-emoji': 'off',
		'no-shadow': 'off',
		'react/prop-types': 'warn',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/no-unresolved': 'off',
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton'],
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'always',
				jsx: 'always',
			},
		],
	},
};
