import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getOpenChannels, selectChannel } from '../../../redux/modules/channels/actions'

import Component from './home-screen'

const mapStateToProps = state => ({
  channels: state.channels.list,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getOpenChannels,
  selectChannel,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
