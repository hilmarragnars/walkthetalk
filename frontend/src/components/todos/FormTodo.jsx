import React, {Component} from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { addTodo } from '../../actions/todos.js';
import FlexBox from '../custom-styles/FlexBox.jsx';
import { Button, Input, Form, FormField, FormFieldLabel } from '@smooth-ui/core-sc';
// import Button from '../custom-styles/Button.jsx';

const FormWrapper = styled.div``
const FormCaption = styled.h2``
// const Form = styled.form``
// const FormGroup = styled.div``
// const Label = styled.label``
// const Input = styled.input``


export class FormTodo extends Component {
  state = {
    title: '',
    description: ''
  };

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { title, description } = this.state;
    const todo = { title, description };
    this.props.addTodo(todo);
  };

  render() {
    const { title, description } = this.state;
    return (
      <FlexBox column alignCenter justifyCenter>
        <FormWrapper>
          <FormCaption>Add todo</FormCaption>
          <Form onSubmit={this.onSubmit}>
            <FormField>
              <FormFieldLabel>Title</FormFieldLabel>
              <Input
                type="text"
                name="title"
                onChange={this.onChange}
                value={title}>
              </Input>
            </FormField>
            <FormField>
              <FormFieldLabel>Description</FormFieldLabel>
              <Input
                type="text"
                name="description"
                onChange={this.onChange}
                value={description}>
              </Input>
            </FormField>
            <FormField>
              <Button type="submit" variant="success" width="100%">Submit</Button>
            </FormField>
          </Form>
        </FormWrapper>
      </FlexBox>
    )
  }
}

export default connect(null, { addTodo })(FormTodo);
