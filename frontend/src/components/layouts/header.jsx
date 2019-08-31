import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { logout } from '../../actions/auth.js'

import Container from '../custom-styles/Container.jsx'
import FlexBox from '../custom-styles/FlexBox.jsx'
import Button from '../custom-styles/Button.jsx'

const HeaderContainer = styled(Container)`
  background-color: #2170BF;
`
const HeaderTitle = styled.h1`
  color: #ffffff;
  font-size: ${props => props.theme.fontSizeXL};
  text-align: center;
  margin: 0;
`
const LinkWrapper = styled.div`

`
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
        <Button onClick={this.props.logout}>Logout</Button>
      </LinkWrapper>
    );

    const guestLinks = (
      <LinkWrapper>
        <Link to='/register'><Button>Register</Button></Link>
        <Link to='/login'><Button>Login</Button></Link>
      </LinkWrapper>
    );

    return (
      <HeaderContainer>
        <FlexBox column alignCenter>
          <HeaderTitle>Walk the Talk</HeaderTitle>
          {isAuthenticated ? authLinks : guestLinks}
        </FlexBox>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(HomePage)
