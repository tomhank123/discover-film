/**
 *
 * Asynchronously loads the component for PersonDetails
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
