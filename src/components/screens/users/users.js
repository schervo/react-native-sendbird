import React, {
  Component,
} from 'react'
import {
  View,
  FlatList,
  Text,
} from 'react-native'
import {
  ListItem,
  Thumbnail,
  Left,
  Body,
} from 'native-base'
import styles from './styles'

class UsersScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text>Users</Text>,
  };

  componentDidMount() {
    const { getUsers } = this.props
    getUsers()
  }

  navigateToUsers = () => {
    const { navigate } = this.props
    navigate('Users')
  }

  handleUserPress = (userId) => {
    const { navigation, createUserChannel, selectChannel } = this.props

    createUserChannel(userId)
      .then(({ action }) => {
        selectChannel(action.payload).then(() => {
          navigation.navigate('Chat')
        })
      })
  }

  render() {
    const { users } = this.props
    return (
      <View>
        <FlatList
          data={users}
          keyExtractor={c => c.userId}
          renderItem={({ item }) => (
            <ListItem avatar onPress={() => this.handleUserPress(item.userId)}>
              <Left>
                <Thumbnail source={{ uri: item.profileUrl }} style={styles.avatar} />
              </Left>
              <Body>
                <Text>{item.userId}</Text>
              </Body>
            </ListItem>
          )}
        />
      </View>
    )
  }
}

export default UsersScreen
