import SendBird from 'sendbird'

export const getOpenChannels = () => new Promise((resolve, reject) => {
  const sb = SendBird.getInstance()
  const openChannelListQuery = sb.OpenChannel.createOpenChannelListQuery()
  openChannelListQuery.next((channels, error) => {
    if (error) {
      reject(error)
    } else {
      resolve(channels)
    }
  })
})


export const getChannel = channel => new Promise((resolve, reject) => {
  const sb = SendBird.getInstance()

  if (channel.channelType === 'group') {
    sb.GroupChannel.getChannel(channel.url, (groupChannel, error) => {
      if (error) reject(error)
      else resolve(groupChannel)
    })
  } else {
    sb.OpenChannel.getChannel(channel.url, (openChannel, error) => {
      if (error) {
        reject(error)
      }


      openChannel.enter((response, err) => {
        if (err) {
          reject(err)
        } else {
          resolve(openChannel)
        }
      })
    })
  }
})
/* eslint-disable-next-line */
export const createChannel = ({ name, privateChannel, openChannel, userIds }) => new Promise((resolve, reject) => {
  const sb = SendBird.getInstance()


  if (!openChannel) {
    sb.GroupChannel.createChannelWithUserIds(userIds, null, name, null, null,
      (channel, error) => {
        if (error) reject(error)
        else resolve(channel)
      })
  } else {
    sb.OpenChannel.createChannel(name, null, null, (channel, error) => {
      if (error) reject(error)
      else resolve(channel)
    })
  }
})

export const getGroupChannels = () => new Promise((resolve, reject) => {
  const sb = SendBird.getInstance()

  const channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery()
  channelListQuery.includeEmpty = true


  if (channelListQuery.hasNext) {
    channelListQuery.next((channels, error) => {
      if (error) reject(error)
      else resolve(channels)
    })
  }
})


export const createUserChannel = user => new Promise((resolve, reject) => {
  const sb = SendBird.getInstance()

  const params = new sb.GroupChannelParams()
  params.isPublic = false
  params.isDistinct = true
  params.addUserIds([user])
  params.name = user

  sb.GroupChannel.createChannel(params, (channel, error) => {
    if (error) {
      reject(error)
    } else {
      resolve(channel)
    }
  })
})
