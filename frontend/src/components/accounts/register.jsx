import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { register } from '../../actions/auth.js';

import Container from '../custom-styles/container.jsx';
import FlexBox from '../custom-styles/flex-box.jsx';
import Button from '../custom-styles/button.jsx';

const FormWrapper = styled.div``
const FormCaption = styled.h2``
const Form = styled.form``
const FormGroup = styled.div``
const Label = styled.label``
const Input = styled.input``
const LoginText = styled.p``

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: ''
  }

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if(password != password2) {
      //TODO make visible alert message, need to create alert component
      console.log("Passwods do not match")
    } else {
      const newUser = {
        username,
        password,
        email
      }
      this.props.register(newUser)
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    if(this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2 } = this.state
    return (
      <Container>
        <FlexBox justifyCenter>
          <FormWrapper>
            <FormCaption>Register</FormCaption>
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
                <Label>Email</Label>
                <Input
                  type="text"
                  name="email"
                  onChange={this.onChange}
                  value={email}>
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
                <Label>Password Again</Label>
                <Input
                  type="text"
                  name="password2"
                  onChange={this.onChange}
                  value={password2}>
                </Input>
              </FormGroup>
              <FormGroup>
                <Button type="submit">Register</Button>
              </FormGroup>
              <LoginText>
                Already have an account <Link to='/login'>Login</Link>
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

export default connect(mapStateToProps, {register} )(Register);
