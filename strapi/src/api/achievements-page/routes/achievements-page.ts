/**
 * achievements-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::achievements-page.achievements-page',{
	config: {
		find: {
			middlewares: ['api::achievements-page.achievements-page-populate']
		}
	}
});
