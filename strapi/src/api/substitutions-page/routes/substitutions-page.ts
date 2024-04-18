/**
 * substitutions-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::substitutions-page.substitutions-page', {
	config: {
		find: {
			middlewares: ["api::substitutions-page.substitutions-page-populate"]
		}
	}
});
