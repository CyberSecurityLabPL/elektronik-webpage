/**
 * teachers-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::teachers-page.teachers-page', {
	config: {
		find: {
			middlewares: ['api::teachers-page.teachers-page-populate']
		}
	}
});

