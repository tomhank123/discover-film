/**
 *
 * DarkModeToggle
 *
 */

import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { ThemeContext } from 'context/theme-context';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// <FormattedMessage {...messages.header} />

function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <Form inline>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={darkMode}
          onChange={({ target }) => setDarkMode(target.checked)}
        />
      </div>
    </Form>
  );
}

DarkModeToggle.propTypes = {};

export default DarkModeToggle;
