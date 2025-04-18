"use strict";

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info(JSON.stringify(ctx.query.populate))
    if (!ctx.query.populate) {
      ctx.query.populate = ["createdBy", "updatedBy"];
    }

    await next();
  };
};
