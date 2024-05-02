/**
 * documents-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::documents-page.documents-page', {
    config: {
        find: {
            middlewares: ['api::documents-page.documents-page-populate']
        }
    }
});
