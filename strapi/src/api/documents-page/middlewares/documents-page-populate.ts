/**
 * `jobs-page-populate` middleware
 */


const populate = {
  populate: {
    document_groups: {
      populate: {
        documents: {
            populate: {
                file: {
                    fields: ['url','ext']
                }
            }
        }
      }
    },
    seo: {
      populate: true
    }
  }
}

export default (config, { strapi }: { strapi: any }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In documents-page-populate middleware.');

    ctx.query = {
    	...populate,
	...ctx.query
    }

    await next();
  };
};
