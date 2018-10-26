/* eslint-disable import/prefer-default-export */
import SendBird from 'sendbird'


export const getChannel = channelUrl => new Promise((resolve, reject) => {
  const sb = SendBird.getInstance()
  sb.OpenChannel.getChannel(channelUrl, (openChannel, error) => {
    if (error) reject(error)
    else resolve(openChannel)

    // openChannel.enter((response, err) => {
    //   if (err) {
    //     reject(err)
    //   } else {
    // const messageListQuery = openChannel.createPreviousMessageListQuery()

    // messageListQuery.load(30, true, (messageList, e) => {
    //   if (e) {
    //     reject(e)
    //   } else {
    //     resolve(messageList)
    //   }
    // })
    //   }
    // })
  })
})

export const getMessages = channel => new Promise((resolve, reject) => {
  const messageListQuery = channel.createPreviousMessageListQuery()

  messageListQuery.load(30, true, (messageList, e) => {
    if (e) reject(e)
    else resolve(messageList)
  })
})

export const sendMessage = (channel, message) => new Promise((resolve, reject) => {
  if (!channel) reject()

  channel.sendUserMessage(message, (m, error) => {
    if (error) {
      reject(error)
    } else {
      resolve(m)
    }
  })
})
