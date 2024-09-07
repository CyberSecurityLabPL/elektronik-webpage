/**
 * `seo-populate` middleware
 */

import { Strapi } from '@strapi/strapi';

const populate = {
  populate: {
    seo: {
      populate: true
    }
  },
}

export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {...ctx.query, ...populate};
    strapi.log.info('In seo-populate middleware.');

    await next();
  };
};
