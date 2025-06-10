/**
 * `jobs-page-populate` middleware
 */

const populate = {
  populate: {
    parents: {
      populate: {
        image: true,
      },
    },
    seo: {
      populate: true,
    },
  },
};

export default (config, { strapi }: { strapi: any }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In parents-council-page-populate middleware.");

    ctx.query = {
      ...populate,
      ...ctx.query,
    };

    await next();
  };
};
