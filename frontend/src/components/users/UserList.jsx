import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/users'
import styled from 'styled-components'
import FlexBox from '../custom-styles/FlexBox.jsx'

const UserListTitle = styled.h2``
const TheUserList = styled.ul`
  list-style: none;
  padding-left: 0;
`
const UserItem = styled.li``

class UserList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
  }

  componentDidMount() {
    console.log('labba labba')
    this.props.getUsers()
  }

  render() {
    console.log('hello!!')
    console.log(this.props.users)
    return (
      <FlexBox column alignCenter>
        <UserListTitle>All Users, Same same</UserListTitle>
        <TheUserList>
          {this.props.users.map(user => (
            <UserItem key={user.id}>{user.username}</UserItem>
          ))}
        </TheUserList>
      </FlexBox>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
})

export default connect(mapStateToProps, { getUsers })(UserList)
