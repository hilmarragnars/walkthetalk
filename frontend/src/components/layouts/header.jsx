import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  background-color: #2170BF;
`
const HeaderTitle = styled.h1`
  color: #ffffff;
  font-size: ${props => props.theme.fontSizeXL};
  text-align: center;
  margin-top: 0;
`

class HomePage extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderTitle>Walk the Talk</HeaderTitle>
        <Link to='/register'>Register></Link>
        <Link to='/login'>Login></Link>
      </HeaderWrapper>
    );
  }
}

export default HomePage
