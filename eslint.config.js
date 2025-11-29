const js = require('@eslint/js');
const nextPlugin = require('eslint-config-next');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  ...(nextPlugin.default || nextPlugin),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React Hooks
      'react-hooks/exhaustive-deps': 'off',
      
      // Next.js
      '@next/next/no-img-element': 'off',
      
      // General
      'no-bitwise': 'off',
      'no-underscore-dangle': 'off',
      'arrow-body-style': 'off',
      'arrow-parens': 'off',
      'class-methods-use-this': 'off',
      'operator-linebreak': 'off',
      'consistent-return': 'off',
      'implicit-arrow-linebreak': 'off',
      
      // Max line length
      'max-len': [
        'error',
        {
          code: 120,
        },
      ],
      
      // Object formatting
      'object-curly-spacing': [
        'error',
        'always',
      ],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: 'always',
        },
      ],
      
      // React
      'react/forbid-prop-types': [
        'error',
        {
          forbid: ['any'],
          checkContextTypes: true,
          checkChildContextTypes: true,
        },
      ],
      'react/function-component-definition': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-array-index-key': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-one-expression-per-line': 'off',
      
      // Accessibility
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      
      // Import (these might not be available in flat config, but keeping for compatibility)
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'import/export': 'off',
    },
  },
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      'dist/**',
      '*.config.js',
      '*.config.ts',
      '.vscode/**',
      '.npmrc',
      '*.log',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'lerna-debug.log*',
      'report.*.json',
      '*.pid',
      '*.seed',
      '*.pid.lock',
      'lib-cov/**',
      'coverage/**',
      '*.lcov',
      '.nyc_output/**',
      '.grunt/**',
      'bower_components/**',
      '.lock-wscript',
      'build/Release/**',
      'jspm_packages/**',
      'typings/**',
      '*.tsbuildinfo',
      '.npm/**',
      '.eslintcache',
      '.rpt2_cache/**',
      '.rts2_cache/**',
      '.node_repl_history',
      '*.tgz',
      '.yarn-integrity',
      '.env',
      '.env.test',
      '.cache/**',
      '.nuxt/**',
      '.vuepress/dist/**',
      '.serverless/**',
      '.fusebox/**',
      '.dynamodb/**',
      '.tern-port',
      'snapSource-server.iml',
      '.idea/**',
      '__local-dev__/**',
      'logs/**',
      'package-lock.json',
    ],
  },
];
