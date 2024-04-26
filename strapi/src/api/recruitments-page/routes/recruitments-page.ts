/**
 * recruitments-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::recruitments-page.recruitments-page',{
	config: {
		find: {
			middlewares: ['api::recruitments-page.recruitments-page-populate']
		}
	}
});
