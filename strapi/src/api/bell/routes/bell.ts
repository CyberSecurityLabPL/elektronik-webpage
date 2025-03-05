/**
 * bell router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::bell.bell',{
	config: {
		find: {
			middlewares: ['api::bell.bell-populate']
		}
	}
});
