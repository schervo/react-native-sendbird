import { createSelector } from 'reselect'

const getMessages = state => state.chat.messages
const getChannel = (state, channelUrl) => channelUrl

const getMessagesList = createSelector(
  [getMessages, getChannel],
  (messages, channelUrl) => (
    messages[channelUrl]
      ? messages[channelUrl].sort((m1, m2) => m2.createdAt - m1.createdAt)
      : []),
)

export default getMessagesList
