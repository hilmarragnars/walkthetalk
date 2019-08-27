import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormWrapper = styled.div``
const FormCaption = styled.h2``
const Form = styled.form``
const FormGroup = styled.div``
const Label = styled.label``
const Input = styled.input``
const Button = styled.button``
const LoginText = styled.p``

export class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  onSubmit = e => {
    e.preventDefault();
    console.log("submit")
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { username, email, password, password2 } = this.state
    return (
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
    )
  }
}

export default Login
