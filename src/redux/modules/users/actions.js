/* eslint-disable import/prefer-default-export */
import {
  GET_USERS,
} from './const'

import UsersApi from './api'

let Api = null

export const getUsers = () => {
  Api = new UsersApi()
  return {
    type: GET_USERS,
    payload: Api.getUsers(),
  }
}
