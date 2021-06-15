/**
 *
 * Header
 *
 */

import Logo from 'images/logo.svg';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink as RouteLink } from 'react-router-dom';
import * as ROUTES from 'routes/constants';
import SearchBar from 'containers/SearchBar';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={RouteLink} to={ROUTES.HOME}>
            <Image src={Logo} alt="Movie Discovery" height="20" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={RouteLink} to={ROUTES.TV}>
                <FormattedMessage {...messages.tvShow} />
              </Nav.Link>
              <Nav.Link as={RouteLink} to={ROUTES.MOVIE}>
                <FormattedMessage {...messages.movies} />
              </Nav.Link>
              <Nav.Link as={RouteLink} to={ROUTES.PERSON}>
                <FormattedMessage {...messages.people} />
              </Nav.Link>
              <NavDropdown title="More">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Item hidden>
                <SearchBar />
              </Nav.Item>
              <Nav.Item>
                <LocaleToggle />
              </Nav.Item>
              <Nav.Link
                exact
                as={RouteLink}
                to={ROUTES.LOGIN}
                activeClassName="d-none"
              >
                Login
              </Nav.Link>
              <Nav.Link
                as={RouteLink}
                to={ROUTES.SEARCH}
                activeClassName="d-none"
              >
                Search
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

Header.propTypes = {};

export default Header;
