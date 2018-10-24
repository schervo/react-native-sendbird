import React, {
  Component,
} from 'react'
import {
  View,
} from 'react-native'
import {
  Text,
} from 'native-base'

class UsersScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text>Users</Text>,
  };


  render() {
    return (
      <View>
        <Text>Users</Text>
      </View>
    )
  }
}

export default UsersScreen
