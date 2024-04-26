/**
 * `jobs-page-populate` middleware
 */

import { Strapi } from '@strapi/strapi';

const populate = {
  populate: {
    jobs: {
      populate: {
      	badges: {
		        populate: true
	    },
    	tasks: {
	    	populate:true
	    },
	    requirements: {
		    populate:true
	    },
        image: {
            populate: true
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
    strapi.log.info('In jobs-page-populate middleware.');

    ctx.query = {
    	...populate,
	...ctx.query
    }

    await next();
  };
};
