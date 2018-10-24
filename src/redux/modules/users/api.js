/* eslint-disable import/prefer-default-export */
import SendBird from 'sendbird'


class UsersApi {
  constructor() {
    this.sb = SendBird.getInstance()
  }

  getUsers = () => new Promise((resolve, reject) => {
    const sb = SendBird.getInstance()
    const query = sb.createUserListQuery()
    query.next((users, error) => {
      if (error) {
        reject(error)
      } else {
        resolve(users)
      }
    })
  })
}

export default UsersApi
