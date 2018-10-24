
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppNavigator from './navigation/navigation'
import configureStore from './redux/store'
/* eslint-disable-next-line */
class App extends Component { 
  render() {
    return (
      <Provider store={configureStore}>
        <AppNavigator />
      </Provider>
    )
  }
}

export default App
