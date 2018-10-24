import {
  GET_USERS,
} from './const'
import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USERS}_PENDING`: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case `${GET_USERS}_FULFILLED`: {
      return {
        ...state,
        list: action.payload,
        isFetching: false,
      }
    }
    case `${GET_USERS}_REJECTED`: {
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
