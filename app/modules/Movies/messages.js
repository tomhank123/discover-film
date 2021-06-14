/*
 * Movies Messages
 *
 * This contains all the text for the Movies container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Movies';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Movies container!',
  },
});
