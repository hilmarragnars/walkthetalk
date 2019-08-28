import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { logout } from '../../actions/auth.js'

const HeaderWrapper = styled.div`
  background-color: #2170BF;
`
const HeaderTitle = styled.h1`
  color: #ffffff;
  font-size: ${props => props.theme.fontSizeXL};
  text-align: center;
  margin-top: 0;
`
const LinkWrapper = styled.div``
const LogoutButton = styled.button``
const Welcome = styled.span``

class HomePage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user} = this.props.auth;

    const authLinks = (
      <LinkWrapper>
        <Welcome>{user ? `Welcome ${user.username}` : ''}</Welcome>
        <LogoutButton onClick={this.props.logout}>Logout</LogoutButton>
      </LinkWrapper>
    );

    const guestLinks = (
      <LinkWrapper>
        <Link to='/register'>Register></Link>
        <Link to='/login'>Login></Link>
      </LinkWrapper>
    );

    return (
      <HeaderWrapper>
        <HeaderTitle>Walk the Talk</HeaderTitle>
        {isAuthenticated ? authLinks : guestLinks}
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(HomePage)
