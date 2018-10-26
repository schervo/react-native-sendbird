import React, {
  Component,
} from 'react'
import {
  View,
  Text,
  FlatList,
} from 'react-native'
import {
  Switch,
  ListItem,
  Left,
  Right,
  Icon,
  Body,
  Button,
  Thumbnail,
  Item,
  Input,
} from 'native-base'
import styles from './styles'

class CreateChannelScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text>Create Channel</Text>,
  };

  state = {
    privateChannel: false,
    openChannel: false,
    name: '',
    selectedUsers: [],
  }

  componentDidMount() {
    const { getUsers } = this.props
    getUsers()
  }

  handlePrivatePress = () => {
    this.setState(state => ({
      privateChannel: !state.privateChannel,
    }))
  }

  handleOpenPress = () => {
    this.setState(state => ({
      openChannel: !state.openChannel,
    }))
  }

  handleChange = (value) => {
    this.setState({
      name: value,
    })
  }

  handleCreateChannel = () => {
    const { createChannel } = this.props
    const {
      name, privateChannel, selectedUsers, openChannel,
    } = this.state

    createChannel({
      name,
      privateChannel,
      openChannel,
      userIds: selectedUsers,
    })
  }

  handleUserPress = (userId) => {
    const { selectedUsers } = this.state
    const newSelectedUsers = [...selectedUsers]

    const index = newSelectedUsers.indexOf(userId)

    if (index !== -1) {
      newSelectedUsers.splice(index, 1)
    } else {
      newSelectedUsers.push(userId)
    }

    this.setState({
      selectedUsers: newSelectedUsers,
    })
  }

  render() {
    const {
      privateChannel, selectedUsers, name, openChannel,
    } = this.state
    const { users } = this.props

    return (
      <View>
        <View style={styles.inputContainer}>
          <Item rounded>
            <Input onChangeText={this.handleChange} value={name} placeholder="Channel Name" />
          </Item>
        </View>
        {
          !openChannel
          && (
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#FF9501' }}>
                <Icon active type="Ionicons" name="lock" />
              </Button>
            </Left>
            <Body>
              <Text>Private</Text>
            </Body>
            <Right>
              <Switch onValueChange={this.handlePrivatePress} value={privateChannel} />
            </Right>
          </ListItem>
          )
        }
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#FF9501' }}>
              <Icon active name="people" />
            </Button>
          </Left>
          <Body>
            <Text>Open</Text>
          </Body>
          <Right>
            <Switch onValueChange={this.handleOpenPress} value={openChannel} />
          </Right>
        </ListItem>
        <Button
          onPress={this.handleCreateChannel}
          textStyle={styles.buttonText}
          style={styles.button}
        >
          <Text>CreateChannel</Text>
        </Button>
        {
          !openChannel
          && (
          <View>
            <ListItem itemDivider>
              <Text>Add users to chat</Text>
            </ListItem>
            <FlatList
              data={users}
              keyExtractor={c => c.userId}
              extraData={selectedUsers}
              renderItem={({ item }) => (
                <ListItem avatar onPress={() => this.handleUserPress(item.userId)}>
                  <Left>
                    <Thumbnail source={{ uri: item.profileUrl }} style={styles.avatar} />
                  </Left>
                  <Body>
                    <Text>{item.userId}</Text>
                  </Body>
                  <Right>
                    {
                      selectedUsers.includes(item.userId)
                      && <Icon active name="check" type="Feather" style={styles.selectedIcon} />
                    }
                  </Right>
                </ListItem>
              )}
            />
          </View>
          )
        }

      </View>
    )
  }
}

export default CreateChannelScreen
