import React, {
  Component,
} from 'react'
import {
  View,
} from 'react-native'
import {
  Text,
} from 'native-base'

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text>Home</Text>,
  };

  render() {
    // const { channels } = this.props
    return (
      <View>

        <Text>Channels</Text>

      </View>
    )
  }
}

export default HomeScreen
