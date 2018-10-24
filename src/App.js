
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import SendBird from 'sendbird'
import AppNavigator from './navigation/navigation'
import configureStore from './redux/store'
// import SendBird from './helpers/sendbird'

class App extends Component {
  constructor(props) {
    super(props)

    new SendBird({
      appId: '6102229F-0A53-417E-841A-A0F2841663E4',
    })
  }

  render() {
    return (
      <Provider store={configureStore}>
        <AppNavigator />
      </Provider>
    )
  }
}

export default App
