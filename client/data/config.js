import * as Sentry from '@sentry/browser';

export function logException(ex, context) {
  Sentry.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
