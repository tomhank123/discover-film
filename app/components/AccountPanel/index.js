/**
 *
 * AccountPanel
 *
 */

import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, ListGroup, Form } from 'react-bootstrap';
import { ThemeContext } from 'context/theme-context';
import LocaleToggle from 'containers/LocaleToggle';

function AccountPanel() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(true);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" className="rounded-circle">
        <FontAwesomeIcon icon={['fas', 'caret-down']} size="lg" />
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="dropdown-menu-dark dropdown-menu-end p-3"
        align="end"
        style={{ width: 380 }}
        show
      >
        <div hidden={toggle}>
          <Dropdown.Item className="rounded-2 p-2">
            <FontAwesomeIcon
              className="me-3"
              icon={['fas', 'info']}
              size="lg"
            />
            Đóng góp ý kiến
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className="rounded-2 p-2"
            as="div"
            onSelect={(_, event) => {
              event.stopPropagation();
              setToggle(!toggle);
            }}
          >
            <FontAwesomeIcon
              className="me-3"
              icon={['fas', 'moon']}
              size="lg"
            />
            Màn hình và trợ năng
          </Dropdown.Item>
          <Dropdown.Item className="rounded-2 p-2">
            <FontAwesomeIcon className="me-3" icon={['fas', 'cog']} size="lg" />
            Cài Đặt
          </Dropdown.Item>
          <Dropdown.Item className="rounded-2 p-2" href="#/action-3">
            <FontAwesomeIcon
              className="me-3"
              icon={['fas', 'sign-out-alt']}
              size="lg"
            />
            Đăng xuất
          </Dropdown.Item>
          <ul className="list-inline mb-0 px-2 lh-1">
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
        </div>
        <div hidden={!toggle}>
          <Dropdown.Header className="fs-4 p-0 mb-3">
            Màn hình và trợ năng
          </Dropdown.Header>
          <div className="d-flex">
            <div className="flex-shrink-0 me-3">
              <FontAwesomeIcon
                className="mt-1"
                icon={['fas', 'moon']}
                size="lg"
              />
            </div>
            <div className="flex-grow-1">
              <p className="my-0">Chế độ tối</p>
              <p className="text-secondary small">
                Điều chỉnh giao diện của Discover Film để giảm độ chói và cho
                đôi mắt được nghỉ ngơi.
              </p>
              <ListGroup variant="flush">
                <ListGroup.Item
                  as="label"
                  className="d-flex justify-content-between align-items-center px-0 bg-transparent text-light"
                >
                  Tối
                  <Form.Check
                    type="radio"
                    name="darkmode"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                </ListGroup.Item>
                <ListGroup.Item
                  as="label"
                  className="d-flex justify-content-between align-items-center px-0 bg-transparent text-light"
                >
                  Sáng
                  <Form.Check
                    type="radio"
                    name="darkmode"
                    checked={!darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <div className="d-flex">
            <div className="flex-shrink-0 me-3">
              <FontAwesomeIcon
                className="mt-1"
                icon={['fas', 'globe']}
                size="lg"
              />
            </div>
            <div className="flex-grow-1">
              <p className="my-0">Ngôn ngữ hiển thị</p>
              <p className="text-secondary small">
                Lựa chọn ngôn ngữ phù hợp sẽ mang lại những trải nghiệm tuyệt
                vời.
              </p>
              <ListGroup variant="flush" hidden>
                <ListGroup.Item
                  as="label"
                  className="d-flex justify-content-between align-items-center px-0 bg-transparent text-light"
                >
                  Tiếng Anh
                  <Form.Check type="radio" value="en" name="language" />
                </ListGroup.Item>
                <ListGroup.Item
                  as="label"
                  className="d-flex justify-content-between align-items-center px-0 bg-transparent text-light"
                >
                  Tiếng Việt
                  <Form.Check type="radio" value="vi" name="language" />
                </ListGroup.Item>
              </ListGroup>
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
