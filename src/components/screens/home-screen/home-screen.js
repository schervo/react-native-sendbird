import React, {
  Component,
} from 'react'
import {
  View,
} from 'react-native'
import {
  Button,
  Text,
} from 'native-base'
import styles from './styles'

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text>Home</Text>,
  };

  componentDidMount() {
    const { getOpenChannels } = this.props

    getOpenChannels()
  }

  handleUserPress = (channel) => {
    const { navigation, selectChannel } = this.props

    selectChannel(channel)
      .then(() => {
        navigation.navigate('Chat')
      })
  }

  navigateToUsers = () => {
    const { navigation } = this.props
    navigation.navigate('Users')
  }

  navigateToCreateChannel = () => {
    const { navigation } = this.props
    navigation.navigate('CreateChannel')
  }

  navigateToChannels = () => {
    const { navigation } = this.props
    navigation.navigate('Channels')
  }

  render() {
    // const { channels } = this.props
    return (
      <View style={styles.container}>
        <Button
          onPress={this.navigateToCreateChannel}
          style={styles.button}
        >
          <Text>Create New Channel</Text>
        </Button>
        <Button
          onPress={this.navigateToUsers}
          style={styles.button}
        >
          <Text>All Users</Text>
        </Button>
        <Button
          onPress={this.navigateToChannels}
          style={styles.button}
        >
          <Text>Channels</Text>
        </Button>
      </View>
    )
  }
}

export default HomeScreen
