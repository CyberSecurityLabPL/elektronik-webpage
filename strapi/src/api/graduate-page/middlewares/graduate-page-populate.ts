
const populate = {
        populate: {
                graduates:{
                        populate:{
                                image:{
                                        populate: true
                                }
                        }
                }
        }
}


export default (config, { strapi }: { strapi: any }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In graduate-page-populate middleware.');

    ctx.query = {
        ...populate,
        ...ctx.query
    }

    await next();
  };
}

