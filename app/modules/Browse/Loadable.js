/**
 *
 * Asynchronously loads the component for Browse
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
