import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getOpenChannels, selectChannel, getGroupChannels } from '../../../redux/modules/channels/actions'

import Component from './channels'

const mapStateToProps = state => ({
  openChannels: state.channels.openChannels,
  groupChannels: state.channels.groupChannels,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getOpenChannels,
  getGroupChannels,
  selectChannel,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
