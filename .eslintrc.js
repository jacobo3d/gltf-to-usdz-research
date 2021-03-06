module.exports = {
  extends: 'airbnb-base',
  rules: {
    'import/prefer-default-export': 0,
    'no-bitwise': 0,
    'no-underscore-dangle': 0,
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
};
