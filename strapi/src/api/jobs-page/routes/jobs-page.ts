/**
 * jobs-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::jobs-page.jobs-page', {
	config: {
		find: {
			middlewares: ["api::jobs-page.jobs-page-populate"]
		}
	}
});
