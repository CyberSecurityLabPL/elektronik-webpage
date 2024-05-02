

/**
 * `landing-page-populate` middleware
 */

const populate = {
    populate: {
        blocks: {
            populate: {
                Image: {
                    fields: ["name","alternativeText","url"]
                },
                link: {
                    populate: true
                },
                row: {
                    populate: true
                },
                benefitCard: {
                    populate: true
                },
                questions: {
                    populate: true
                },
                linkButton: {
                    populate: true
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
