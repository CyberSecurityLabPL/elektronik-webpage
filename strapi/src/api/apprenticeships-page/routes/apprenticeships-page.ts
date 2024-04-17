/**
 * apprenticeships-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::apprenticeships-page.apprenticeships-page', {
	config: {
		find: {
			middlewares: ["api::apprenticeships-page.apprenticeships-page-populate"]
		}
	}
});
