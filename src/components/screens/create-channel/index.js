import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createChannel } from '../../../redux/modules/channels/actions'
import { getUsers } from '../../../redux/modules/users/actions'

import Component from './create-channel'

const mapStateToProps = state => ({
  users: state.users.list,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  createChannel,
  getUsers,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
