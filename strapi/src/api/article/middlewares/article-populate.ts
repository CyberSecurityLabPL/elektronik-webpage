/**
 * `jobs-page-populate` middleware
 */


const populate = {
  sort: 'createdAt:DESC',
  populate: {
    image: {
      populate: true
    },
    createdBy: {
      populate: true
    },
    updatedBy: {
      populate: true
    }
  }
}

export default (config, { strapi }: { strapi: any }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In jobs-page-populate middleware.');

    ctx.query = {
    	...populate,
	...ctx.query
    }

    await next();
  };
};
