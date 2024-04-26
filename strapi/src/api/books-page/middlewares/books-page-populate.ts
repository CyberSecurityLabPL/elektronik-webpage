/**
 * `books-page-population` middleware
 */

import { Strapi } from '@strapi/strapi';

const populate = {
  populate: {
    book_groups: {
      populate: {
        books: {
          populate: {
            image: {
                populate: true
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

export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In books-page-population middleware.');

    ctx.query = {
        ...populate,
	...ctx.query
    }

    await next();
  };
};
