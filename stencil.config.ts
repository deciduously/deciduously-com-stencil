import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import nodePolyfills from 'rollup-plugin-node-polyfills';
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.ts', './src/**/*.tsx', './src/index.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: 'https://deciduously.com/'
    }
  ],
  plugins: [
    postcss({
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        autoprefixer(),
        ...(process.env.NODE_ENV === 'production'
          ? [purgecss, require('cssnano')]
          : [])
      ]
    }),
    nodePolyfills()
  ]
};
