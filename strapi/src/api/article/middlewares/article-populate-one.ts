/**
 * `jobs-page-populate` middleware
 */

const populate = {
  populate: {
    image: true,
    createdBy: true,
    updatedBy: true,
    seo: {
      populate: {
        metaImage: true,
      },
    },
    redirect: true,
  },
};

export default (config, { strapi }: { strapi: any }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In jobs-page-populate middleware.");

    ctx.query = {
      ...populate,
      ...ctx.query,
    };

    await next();
  };
};
