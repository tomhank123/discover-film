/**
 *
 * Asynchronously loads the component for Tv
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
