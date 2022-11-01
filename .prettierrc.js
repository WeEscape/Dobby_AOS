module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  singleQuote: true,
  semi: true,
  printWidth: 180,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'es5',
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      parser: 'flow',
    },
  ],
};
