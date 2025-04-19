/**
 * `announcement-populate-one` middleware
 */


const populate = {
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
    strapi.log.info('In announcement-populate-one middleware.');

    ctx.query = {
        ...populate,
        ...ctx.query
    }

    await next();
  };
};
