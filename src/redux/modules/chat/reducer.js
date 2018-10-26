import {
  GET_CHANNEL,
  GET_MESSAGES,
  SEND_MESSAGE,
  NEW_MESSAGE_RECEIVED,
} from './const'
import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CHANNEL}_PENDING`: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case `${GET_CHANNEL}_FULFILLED`: {
      return {
        ...state,
        channel: action.payload,
        isFetching: false,
      }
    }
    case `${GET_CHANNEL}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    }
    case `${GET_MESSAGES}_PENDING`: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case `${GET_MESSAGES}_FULFILLED`: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.meta.channel.url]: action.payload,
        },
        isFetching: false,
      }
    }
    case `${GET_MESSAGES}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    }
    case `${SEND_MESSAGE}_PENDING`: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case `${SEND_MESSAGE}_FULFILLED`: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.meta.channel.url]: [
            ...state.messages[action.meta.channel.url],
            action.payload,
          ],

        },
        isFetching: false,
      }
    }
    case `${SEND_MESSAGE}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    }
    case NEW_MESSAGE_RECEIVED: {
      const { channel, message } = action.payload

      if (!state.messages[channel.url]) {
        return state
      }

      return {
        ...state,
        messages: {
          ...state.messages,
          [channel.url]: [
            ...state.messages[channel.url],
            message,
          ],
        },
      }
    }
    default:
      return state
  }
}

export default reducer
