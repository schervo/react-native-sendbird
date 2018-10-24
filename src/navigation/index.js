import { connect } from 'react-redux'
import {
  reduxifyNavigator,
} from 'react-navigation-redux-helpers'

import AppNavigator from './navigation'

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(reduxifyNavigator(AppNavigator, 'root'))
