/**
 *
 * AccountPanel
 *
 */

import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, ListGroup, Form, Badge, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { ThemeContext } from 'context/theme-context';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

function AccountPanel() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" className="rounded-circle">
        <FontAwesomeIcon icon={['fas', 'caret-down']} />
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="dropdown-menu-end p-3"
        align="end"
        style={{ width: 380 }}
      >
        <ListGroup hidden={toggle}>
          <ListGroup.Item
            action
            className="p-1 rounded-3 border-0 d-flex justify-content-start align-items-center gap-3"
          >
            <Badge className="bg-secondary rounded-pill p-2 fs-5">
              <FontAwesomeIcon icon={['fas', 'info-circle']} />
            </Badge>
            <FormattedMessage {...messages.giveFeedback} />
          </ListGroup.Item>
          <Dropdown.Divider />
          <ListGroup.Item
            action
            className="p-1 rounded-3 border-0 d-flex justify-content-start align-items-center gap-3"
            onClick={() => setToggle(!toggle)}
          >
            <Badge className="bg-secondary rounded-pill p-2 fs-5">
              <FontAwesomeIcon icon={['fas', 'moon']} />
            </Badge>
            <FormattedMessage {...messages.displayNAccessibility} />
          </ListGroup.Item>
          <ListGroup.Item
            action
            className="p-1 rounded-3 border-0 d-flex justify-content-start align-items-center gap-3"
          >
            <Badge className="bg-secondary rounded-pill p-2 fs-5">
              <FontAwesomeIcon icon={['fas', 'cog']} />
            </Badge>
            <FormattedMessage {...messages.setting} />
          </ListGroup.Item>
          <ListGroup.Item
            action
            className="p-1 rounded-3 border-0 d-flex justify-content-start align-items-center gap-3"
          >
            <Badge className="bg-secondary rounded-pill p-2 fs-5">
              <FontAwesomeIcon icon={['fas', 'sign-out-alt']} />
            </Badge>
            <FormattedMessage {...messages.signout} />
          </ListGroup.Item>
          <ul className="list-inline mt-3 mb-0 px-2 lh-1">
            <li className="list-inline-item">
              <a
                href="Item A"
                className="text-secondary text-decoration-none small"
              >
                Quyền riêng tư
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="Item A"
                className="text-secondary text-decoration-none small"
              >
                Điều khoản
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="Item A"
                className="text-secondary text-decoration-none small"
              >
                Quảng cáo
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="Item A"
                className="text-secondary text-decoration-none small"
              >
                Xem thêm
              </a>
            </li>
          </ul>
        </ListGroup>
        <div hidden={!toggle}>
          <h5 className="mb-3">
            <Button
              className="me-3 rounded-circle border-0"
              variant="outline-secondary"
              onClick={() => setToggle(!toggle)}
            >
              <FontAwesomeIcon icon={['fas', 'arrow-left']} />
            </Button>
            <FormattedMessage {...messages.displayNAccessibility} />
          </h5>
          <div className="d-flex">
            <div className="flex-shrink-0 me-3">
              <Badge className="bg-secondary rounded-pill p-2 fs-5">
                <FontAwesomeIcon icon={['fas', 'adjust']} />
              </Badge>
            </div>
            <div className="flex-grow-1">
              <p className="my-0">
                <FormattedMessage {...messages.darkmodeHeader} />
              </p>
              <p className="text-secondary small">
                <FormattedMessage {...messages.darkmodeMessage} />
              </p>
              <ListGroup>
                <ListGroup.Item action className="rounded-3 border-0">
                  <Form.Label className="d-flex justify-content-between align-items-center mb-0 pe-auto">
                    <FormattedMessage {...messages.darkmodeDark} />
                    <Form.Check
                      type="radio"
                      name="darkmode"
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                    />
                  </Form.Label>
                </ListGroup.Item>
                <ListGroup.Item action className="rounded-3 border-0">
                  <Form.Label className="d-flex justify-content-between align-items-center mb-0">
                    <FormattedMessage {...messages.darkmodeLight} />
                    <Form.Check
                      type="radio"
                      name="darkmode"
                      checked={!darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                    />
                  </Form.Label>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <div className="d-flex mt-3">
            <div className="flex-shrink-0 me-3">
              <Badge className="bg-secondary rounded-pill p-2 fs-5">
                <FontAwesomeIcon icon={['fas', 'globe']} />
              </Badge>
            </div>
            <div className="flex-grow-1">
              <p className="my-0">
                <FormattedMessage {...messages.displayLanguageHeader} />
              </p>
              <p className="text-secondary small">
                <FormattedMessage {...messages.displayLanguageMessage} />
              </p>
              <LocaleToggle />
            </div>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}

AccountPanel.propTypes = {};

export default AccountPanel;
