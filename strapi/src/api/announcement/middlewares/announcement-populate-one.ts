/**
 * `announcement-populate-one` middleware
 */

import { Strapi } from '@strapi/strapi';

const populate = {
  populate: {
    image: {
      populate: true
    },
    createdBy: {
      populate: true
    },
    updatedBy: {
      populate: true
    }
  }
}


export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In announcement-populate-one middleware.');

    ctx.query = {
        ...populate,
        ...ctx.query
    }

    await next();
  };
};
