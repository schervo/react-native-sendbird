import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../../../redux/modules/auth/actions'

import Component from './login'

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
  login,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
