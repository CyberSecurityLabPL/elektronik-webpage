/**
 * graduate-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::graduate-page.graduate-page',{
	config: {
		find: {
			middlewares: ['api::graduate-page.graduate-page-populate']
		}
	}
});
