/*
 * People Messages
 *
 * This contains all the text for the People container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.People';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the People container!',
  },
});
