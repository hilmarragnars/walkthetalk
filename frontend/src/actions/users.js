import axios from 'axios'
import { returnErrors } from './messages'
import { GET_USERS } from './types'

// LIST USERS
export const getUsers = () => async (dispatch, getState) => {
  try {
    const res = await axios.get('/api/users')
    dispatch({
      type: GET_USERS,
      payload: res.data,
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
  }
}
