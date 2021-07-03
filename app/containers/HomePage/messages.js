/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  darkmodeHeader: {
    id: `${scope}.darkmode.header`,
    defaultMessage: 'Dark Mode',
  },
  darkmodeMessage: {
    id: `${scope}.darkmode.message`,
    defaultMessage:
      'Adjust the look and feel of Discover Film to reduce glare and give your eyes a break.',
  },
  displayLanguageHeader: {
    id: `${scope}.display_language.header`,
    defaultMessage: 'Display Language',
  },
  displayLanguageMessage: {
    id: `${scope}.display_language.message`,
    defaultMessage: 'Select your language will be bring great experiences.',
  },
});
