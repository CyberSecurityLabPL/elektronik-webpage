/**
 * `landing-page-populate` middleware
 */

const populate = {
  populate: {
    blocks: {
      on: {
        "blocks.hero": {
          populate: {
            images: {
              fields: ["name", "alternativeText", "url"],
            },
            linkPrimary: true,
            linkSecondary: true,
          },
        },
        "blocks.faq": {
          populate: {
            questions: true,
            linkButton: true,
          },
        },
        "blocks.map": true,
        "blocks.overview": {
          populate: {
            row: {
              populate: {
                image: true,
              },
            },
          },
        },
        "blocks.benefits": {
          populate: {
            benefitCard: {
              populate: {
                image: true,
              },
            },
          },
        },
        "blocks.news": true,
      },
    },
    seo: true,
  },
};
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In landing-page-populate middleware.");

    ctx.query = {
      ...populate,
      ...ctx.query,
    };

    await next();
  };
};
