/**
 *
 * Asynchronously loads the component for People
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
