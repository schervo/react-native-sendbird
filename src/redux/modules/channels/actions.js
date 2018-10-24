/* eslint-disable import/prefer-default-export */
import {
  GET_OPEN_CHANNELS,
  SELECT_CHANNEL,
  CREATE_CHANNEL,
  GET_GROUP_CHANNELS,
  CREATE_USER_CHANNEL,
} from './const'

import * as Api from './api'

export const getOpenChannels = () => ({
  type: GET_OPEN_CHANNELS,
  payload: Api.getOpenChannels(),
})

export const selectChannel = channel => ({
  type: SELECT_CHANNEL,
  payload: Api.getChannel(channel),
  meta: {
    channel,
  },
})

export const createChannel = channel => ({
  type: CREATE_CHANNEL,
  payload: Api.createChannel(channel),
})

export const getGroupChannels = () => ({
  type: GET_GROUP_CHANNELS,
  payload: Api.getGroupChannels(),
})

export const createUserChannel = user => ({
  type: CREATE_USER_CHANNEL,
  payload: Api.createUserChannel(user),
})
