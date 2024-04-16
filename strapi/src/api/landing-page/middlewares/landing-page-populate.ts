'use strict';

/**
 * `landing-page-populate` middleware
 */

const populate = {
  populate: {
    blocks: {
      populate: {
        Image: {
          fields: ["name", "alternativeText", "url"]
        },
        Link: {
          populate: true
        },
        Card: {
          populate: {
            Image: {
              fields: ["name", "alternativeText", "url"]
            }
          }
        },
        Plan: {
          populate: ["services", "Link"]
        },
        Contact: {
          form: {
            populate: ["input", "button"]
          }
        }
      }
    }
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');

    ctx.query = {
      ...populate,
      ...ctx.query
    }

    await next();
  };
};
