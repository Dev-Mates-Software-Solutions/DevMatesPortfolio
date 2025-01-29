// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://91d14ccc6a0c24903de09407c40d101f@o4508725322448896.ingest.us.sentry.io/4508725328478208",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
