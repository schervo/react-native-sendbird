import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Component from './home-screen'

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
