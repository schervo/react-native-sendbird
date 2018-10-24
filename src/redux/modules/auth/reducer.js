import {
  AsyncStorage,
} from 'react-native'
import {
  LOGIN,
} from './const'
import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`: {
      return {
        ...state,
        isFetching: false,
      }
    }
    case `${LOGIN}_FULFILLED`: {
      AsyncStorage.setItem('userId', action.payload.userId)
      return {
        ...state,
        user: action.payload,
        isFetching: false,
      }
    }
    case `${LOGIN}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    }
    default:
      return state
  }
}

export default reducer
