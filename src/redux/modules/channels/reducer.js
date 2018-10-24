import {
  GET_OPEN_CHANNELS,
  SELECT_CHANNEL,
  CREATE_CHANNEL,
  GET_GROUP_CHANNELS,
} from './const'
import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_OPEN_CHANNELS}_PENDING`: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case `${GET_OPEN_CHANNELS}_FULFILLED`: {
      return {
        ...state,
        openChannels: action.payload,
        isFetching: false,
      }
    }
    case `${GET_OPEN_CHANNELS}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    }
    case `${SELECT_CHANNEL}_PENDING`: {
      return {
        ...state,
        isFetching: true,
        currentChannelUrl: action.meta.channel.url,
      }
    }
    case `${SELECT_CHANNEL}_FULFILLED`: {
      return {
        ...state,
        isFetching: false,
        sendBirdChannel: action.payload,
      }
    }
    case `${SELECT_CHANNEL}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        currentChannelUrl: null,
        error: action.payload,
      }
    }
    case `${CREATE_CHANNEL}_PENDING`: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case `${CREATE_CHANNEL}_FULFILLED`: {
      const type = action.payload.channelType === 'group' ? 'groupChannels' : 'openChannels'
      return {
        ...state,
        isFetching: false,
        [type]: [
          ...state[type],
          action.payload,
        ],
      }
    }
    case `${CREATE_CHANNEL}_REJECTED`: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    }
    case `${GET_GROUP_CHANNELS}_PENDING`: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case `${GET_GROUP_CHANNELS}_FULFILLED`: {
      return {
        ...state,
        groupChannels: action.payload,
        isFetching: false,
      }
    }
    case `${GET_GROUP_CHANNELS}_REJECTED`: {
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
