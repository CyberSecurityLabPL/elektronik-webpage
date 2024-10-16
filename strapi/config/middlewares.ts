export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {	
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http:'],
          'img-src': ["'self'", 'data:', 'blob:', 'http://www.zseis.zgora.pl'],
          'media-src': ["'self'", 'data:', 'blob:', 'http://www.zseis.zgora.pl'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
