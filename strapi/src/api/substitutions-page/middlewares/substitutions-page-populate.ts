/**
 * `substitutions-page-populate` middleware
 */


const populate = {
  populate: {
    seo: {
      populate: true
    }
  }
}

export default (config, { strapi }: { strapi: any }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In substitutions-page-populate middleware.');

    ctx.query = {
    	...populate,
	...ctx.query
    }

    await next();
  };
};
