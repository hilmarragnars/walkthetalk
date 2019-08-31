import React, {Component} from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { addTodo } from '../../actions/todos.js';
import FlexBox from '../custom-styles/FlexBox.jsx';
import Button from '../custom-styles/Button.jsx';

const FormWrapper = styled.div``
const FormCaption = styled.h2``
const Form = styled.form``
const FormGroup = styled.div``
const Label = styled.label``
const Input = styled.input``


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
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                onChange={this.onChange}
                value={title}>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                onChange={this.onChange}
                value={description}>
              </Input>
            </FormGroup>
            <FormGroup>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </Form>
        </FormWrapper>
      </FlexBox>
    )
  }
}

export default connect(null, { addTodo })(FormTodo);
