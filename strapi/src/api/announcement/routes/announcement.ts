/**
 * announcement router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::announcement.announcement',{
	config: {
		find: {
			middlewares: ['api::announcement.announcement-populate']
		},
		findOne: {
			middlewares: ['api::announcement.announcement-populate-one']
		}
	}
});
