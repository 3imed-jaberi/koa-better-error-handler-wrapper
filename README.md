# koa-better-error-handler-wrapper

[![NPM version][npm-badge]][npm-url]
[![License][license-badge]][license-url]
![Code Size][code-size-badge]

<!-- ***************** -->

[npm-badge]: https://img.shields.io/npm/v/koa-better-error-handler-wrapper.svg?style=flat
[npm-url]: https://www.npmjs.com/package/koa-better-error-handler-wrapper
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: https://github.com/3imed-jaberi/koa-better-error-handler-wrapper/blob/master/LICENSE
[code-size-badge]: https://img.shields.io/github/languages/code-size/3imed-jaberi/koa-better-error-handler-wrapper
[koa-better-error-handler]: https://github.com/ladjs/koa-better-error-handler

<!-- ***************** -->

**A wrapper function provide a fast way to start with koa better error handler.**

## `Installation`

```bash
# npm ..
$ npm install koa-better-error-handler-wrapper koa-better-error-handler koa-404-handler
# yarn ..
$ yarn add koa-better-error-handler-wrapper koa-better-error-handler koa-404-handler
```

## `Usage`

This is a practical example of how to use.

```javascript
const Koa = require("koa");
const koaBetterErrorHandlerWrapper = require("koa-better-error-handler-wrapper");

const app = koaBetterErrorHandlerWrapper(new Koa());
```

### `Arguments`

You can pass some arguments to the wrapper function;

- `app` &mdash; koa application instance.
- `isApi` &mdash; (Boolean) tell the error handler that it's dealing with an API (`default to true`).
- ...`koaBetterErrorHandlerArgs` &mdash; all the rest arguments are passed directly to [koa-better-error-handler]. for more details see the original reference [here](https://github.com/ladjs/koa-better-error-handler#api).

#### License

[MIT](LICENSE) &copy; [Imed Jaberi](https://github.com/3imed-jaberi)
