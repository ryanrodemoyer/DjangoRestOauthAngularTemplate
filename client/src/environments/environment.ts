// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  OAUTH_TOKEN_ENDPOINT: 'http://localhost:8000/o/token/',

  OAUTH_APPLICATION: {
    grant_type: 'password',
    client_id: '2VqEM1ftXZd7tyePnvFluMyT1cuTEKXN5oNUWBl1'
  },
};
