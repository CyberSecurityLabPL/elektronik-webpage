/**
 * `bell-populate` middleware
 */

import { Strapi } from '@strapi/strapi';

const populate = {
  populate: {
    lesson0: {
      populate: true
    },
    lesson1: {
      populate: true
    },
    lesson2: {
      populate: true
    },
    lesson3: {
      populate: true
    },
    lesson4: {
      populate: true
    },
    lesson5: {
      populate: true
    },
    lesson6: {
      populate: true
    },
    lesson7: {
      populate: true
    },
    lesson8: {
      populate: true
    },
    lesson9: {
      populate: true
    },
  }
}


export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In bell-populate middleware.');

    ctx.query = {
      ...populate,
      ...ctx.query
    }


    await next();
  };
};
