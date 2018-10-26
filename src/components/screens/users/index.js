import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../../../redux/modules/users/actions'
import { selectChannel, createUserChannel } from '../../../redux/modules/channels/actions'

import Component from './users'

const mapStateToProps = state => ({
  users: state.users.list,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUsers,
  selectChannel,
  createUserChannel,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
