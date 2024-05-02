/**
 * parents-council-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::parents-council-page.parents-council-page', {
	config: {
		find:{
			middlewares: ['api::parents-council-page.parents-council-page-populate']
		}
	}
});
