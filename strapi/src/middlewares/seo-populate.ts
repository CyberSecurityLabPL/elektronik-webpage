/**
 * `seo-populate` middleware
 */


const populate = {
  populate: {
    seo: {
      populate: true
    }
  },
}

export default (config, { strapi }: { strapi: any }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {...ctx.query, ...populate};
    strapi.log.info('In seo-populate middleware.');

    await next();
  };
};
