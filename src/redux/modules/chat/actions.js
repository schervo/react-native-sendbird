/* eslint-disable import/prefer-default-export */
import {
  GET_CHANNEL,
  GET_MESSAGES,
  SEND_MESSAGE,
  NEW_MESSAGE_RECEIVED,
} from './const'

import * as Api from './api'

export const getChannel = channelUrl => ({
  type: GET_CHANNEL,
  payload: Api.getChannel(channelUrl),
})

export const getMessages = channel => ({
  type: GET_MESSAGES,
  payload: Api.getMessages(channel),
  meta: {
    channel,
  },
})

export const sendMessage = (channel, message) => ({
  type: SEND_MESSAGE,
  payload: Api.sendMessage(channel, message),
  meta: {
    channel,
  },
})

export const newMessageReceived = (channel, message) => ({
  type: NEW_MESSAGE_RECEIVED,
  payload: {
    channel,
    message,
  },
})
