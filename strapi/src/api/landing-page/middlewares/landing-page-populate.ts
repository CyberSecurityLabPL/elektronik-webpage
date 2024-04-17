'use strict';

/**
 * `landing-page-populate` middleware
 */

const populate = {
  populate: {
    blocks: {
      populate: {
        image: {
          fields: ["name", "alternativeText", "url"]
        },
        linkButton: {
          populate: true
        },
        row: {
          populate: {
            Image: {
              fields: ["name", "alternativeText", "url"]
            }
          }
        },
        benefitCard: {
          populate: true
        },
        sponsors: {
          populate: true
        }
      }
    },
    seo: {
      fields: ["metaTitle", "metaDescription", "keywords"]
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
