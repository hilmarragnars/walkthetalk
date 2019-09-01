import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../custom-styles/Container.jsx';
import FlexBox from '../custom-styles/FlexBox.jsx';
import { Button, Input, Form, FormField, FormFieldLabel } from '@smooth-ui/core-sc';
import { login } from '../../actions/auth.js';

const FormWrapper = styled.div``
const FormCaption = styled.h2``
const LoginText = styled.p``

export class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2 } = this.state
    return (
      <Container fullVertical>
        <FlexBox justifyCenter>
          <FormWrapper>
            <FormCaption>Login</FormCaption>
            <Form onSubmit={this.onSubmit}>
              <FormField>
                <FormFieldLabel>Username</FormFieldLabel>
                <Input
                  type="text"
                  name="username"
                  onChange={this.onChange}
                  value={username}>
                </Input>
              </FormField>
              <FormField>
                <FormFieldLabel>Password</FormFieldLabel>
                <Input
                  type="text"
                  name="password"
                  onChange={this.onChange}
                  value={password}>
                </Input>
              </FormField>
              <FormField>
                <Button type="submit" width="100%" variant="success">Login</Button>
              </FormField>
              <LoginText>
                Don't have an account <Link to='/register'>Register</Link>
              </LoginText>
            </Form>
          </FormWrapper>
        </FlexBox>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login} )(Login);
