/**
 * homepage router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::homepage.homepage', {
  only: ['find'],
});
