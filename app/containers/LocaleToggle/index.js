/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { ListGroup, Form } from 'react-bootstrap';
import Wrapper from './Wrapper';
import Title from './Title';
import messages from './messages';
import { appLocales } from '../../i18n';

export function LocaleToggle(props) {
  return (
    <Wrapper>
      <ListGroup>
        {appLocales.map(value => (
          <ListGroup.Item key={value} action className="rounded-3 border-0">
            <Form.Label className="d-flex justify-content-between align-items-center mb-0">
              <Title value={value} message={messages[value]} />
              <Form.Check
                type="radio"
                value={value}
                name="language"
                checked={props.locale === value}
                onChange={props.onLocaleToggle}
              />
            </Form.Label>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Wrapper>
  );
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: evt => dispatch(changeLocale(evt.target.value)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle);
