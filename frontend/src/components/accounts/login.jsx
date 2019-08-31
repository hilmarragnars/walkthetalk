import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../custom-styles/Container.jsx';
import FlexBox from '../custom-styles/FlexBox.jsx';
import Button from '../custom-styles/Button.jsx';
import { login } from '../../actions/auth.js';

const FormWrapper = styled.div``
const FormCaption = styled.h2``
const Form = styled.form``
const FormGroup = styled.div``
const Label = styled.label``
const Input = styled.input``
// const Button = styled.button``
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
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="text"
                  name="username"
                  onChange={this.onChange}
                  value={username}>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="text"
                  name="password"
                  onChange={this.onChange}
                  value={password}>
                </Input>
              </FormGroup>
              <FormGroup>
                <Button type="submit">Login</Button>
              </FormGroup>
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
