import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMessages, sendMessage, newMessageReceived } from '../../../redux/modules/chat/actions'
import { getMessagesList } from '../../../redux/modules/chat/selectors'
import Component from './chat'

const mapStateToProps = state => ({
  currentChannelUrl: state.channels.currentChannelUrl,
  sendBirdChannel: state.channels.sendBirdChannel,
  messages: getMessagesList(state, state.channels.currentChannelUrl),
  currentUser: state.auth.user,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMessages,
  sendMessage,
  newMessageReceived,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
