/* eslint-disable import/prefer-default-export */

export const login = (sb, userName) => new Promise((resolve, reject) => {
  sb.connect(userName, (user, error) => {
    if (error) {
      reject(error)
    } else {
      resolve(user)
    }
  })
})
