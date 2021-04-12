/*!
 * koa-better-error-handler-wrapper
 * Copyright(c) 2021 Imed Jaberi
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

const koaBetterErrorHandler = require('koa-better-error-handler');
const koa404Handler = require('koa-404-handler');

/**
 * Expose `koaBetterErrorHandlerWrapper()`.
 */

module.exports = koaBetterErrorHandlerWrapper;

/**
 * A wrapper function provide a fast way to start with koa better error handler.
 *
 * @param {KoaApplication} [app]                koa application instance.
 * @param {Boolean} [isApi=true]                tell the error handler that it's dealing with an API.
 * @param {Array} [koaBetterErrorHandlerArgs]   all params passed to koa-better-error-handler function.
 *
 * @api public
 * */
function koaBetterErrorHandlerWrapper(
  app,
  isApi = true,
  ...koaBetterErrorHandlerArgs
) {
  // override koa's undocumented error handler.
  app.context.addEventListener(
    'error',
    koaBetterErrorHandler(...koaBetterErrorHandlerArgs)
  );
  // specify that this is our api.
  if (isApi) app.context.api = isApi;
  // use koa-404-handler.
  app.use(koa404Handler);

  // return the application
  return app;
}
