/**
 *
 * Asynchronously loads the component for MapPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const MapPage = lazyLoad(
  () => import('./index'),
  module => module.MapPage,
);
