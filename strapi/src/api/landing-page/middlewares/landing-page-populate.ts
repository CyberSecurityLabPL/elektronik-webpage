

/**
 * `landing-page-populate` middleware
 */

const populate = {
    populate: {
        blocks: {
            populate: {
                images: {
                    fields: ["name","alternativeText","url"]
                },
                linkPrimary: {
                    populate: true
                },
                linkSecondary: {
                    populate: true
                },
                row: {
                    populate: {
                        image: {
                            populate: true
                        }
                    }
                },
                benefitCard: {
                    populate: {
                        image:{
                            populate: true
                        },
                    },
                },
                questions: {
                    populate: true
                },
                linkButton: {
                    populate: true
                }
            }
        },
        seo: {
            populate: true
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
