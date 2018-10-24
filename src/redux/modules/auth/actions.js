/* eslint-disable import/prefer-default-export */
import {
  LOGIN,
} from './const'

import * as Api from './api'

export const login = (sb, userId) => ({
  type: LOGIN,
  payload: Api.login(sb, userId),
})
