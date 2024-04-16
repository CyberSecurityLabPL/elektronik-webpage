/**
 * `navigation-populate` middleware
 */

import { Strapi } from '@strapi/strapi';

const populate = {
  populate: {
    logo: {
      fields: ["url"]
    },
    timetable: {
      populate: true
    },
    gradebook: {
      populate: true
    },
    link_groups: {
      populate: {
        links: {
          populate: true
        }
      }
    }
  }
}

export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In navigation-populate middleware.');

    ctx.query = {
    	...populate,
	...ctx.query
    }

    await next();
  };
};
