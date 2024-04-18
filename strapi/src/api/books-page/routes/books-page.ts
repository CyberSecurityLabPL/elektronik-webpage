/**
 * books-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::books-page.books-page', {
	config: {
		find: {
			middlewares: ["api::books-page.books-page-populate"]
		}
	}
});
