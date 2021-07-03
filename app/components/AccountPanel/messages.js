/*
 * AccountPanel Messages
 *
 * This contains all the text for the AccountPanel component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.AccountPanel';

export default defineMessages({
  signout: {
    id: `${scope}.signout`,
    defaultMessage: 'Sign Out',
  },
  setting: {
    id: `${scope}.setting`,
    defaultMessage: 'Setting',
  },
  giveFeedback: {
    id: `${scope}.give_feedback`,
    defaultMessage: 'Give Feedback',
  },
  displayNAccessibility: {
    id: `${scope}.display_n_accessibility`,
    defaultMessage: 'Display & accessibility',
  },
  darkmodeDark: {
    id: `${scope}.darkmode.dark`,
    defaultMessage: 'Dark',
  },
  darkmodeLight: {
    id: `${scope}.darkmode.light`,
    defaultMessage: 'Light',
  },
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
