/* eslint-disable no-return-assign */

import React, {
  Component,
} from 'react'
import {
  View,
  FlatList,
  Text,
  KeyboardAvoidingView,
} from 'react-native'
import {
  Icon,
  Input,
  Item,
} from 'native-base'
import SendBird from 'sendbird'
import styles from './styles'

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state

    return {
      headerTitle: <Text>{params && params.title}</Text>,
    }
  };


  constructor(props) {
    super(props)

    this.sb = SendBird.getInstance()

    this.state = {
      message: '',
    }
  }

  componentWillMount() {
    const { navigation, sendBirdChannel } = this.props
    navigation.setParams({ title: sendBirdChannel.name })
  }


  componentDidMount() {
    const { getMessages, sendBirdChannel } = this.props
    getMessages(sendBirdChannel).then(() => {
      this.addListener()
    })
  }

  handleChange = (value) => {
    this.setState({
      message: value,
    })
  }

  handleSendMessage = () => {
    const { sendMessage, sendBirdChannel } = this.props
    const { message } = this.state
    this.setState({
      message: '',
    })
    sendMessage(sendBirdChannel, message)
  }

  addListener = () => {
    const { sendBirdChannel, newMessageReceived } = this.props
    const ChannelHandler = new this.sb.ChannelHandler()
    const HANDLER_ID = `${sendBirdChannel.url}_HANDLER`

    ChannelHandler.onMessageReceived = (channel, message) => {
      newMessageReceived(channel, message)
    }

    this.sb.addChannelHandler(HANDLER_ID, ChannelHandler)
  }


  render() {
    const { messages, currentUser } = this.props
    const { message } = this.state

    return (
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        {/* <View style={styles.container}> */}
        <View style={styles.messagesList}>
          <FlatList
            contentContainerStyle={styles.listContainer}
            data={messages}
            keyExtractor={c => c.messageId.toString()}
            ref={ref => this.flatList = ref}
            inverted
            renderItem={({ item }) => {
              const isMine = item.sender.userId === currentUser.userId
              return (
                <View style={[
                  styles.messageContainer,
                  isMine ? styles.myMessageContainer : null,
                ]}
                >
                  <View>
                    <Text style={isMine ? styles.me : null}>{item.sender.userId}</Text>
                    <View style={[
                      styles.message,
                      isMine ? styles.myMessage : null,
                    ]}
                    >
                      <Text>{item.message}</Text>
                    </View>
                  </View>
                </View>
              )
            }
          }

          />
        </View>
        <View style={styles.inputTextContainer}>
          <View style={styles.input}>
            <Item rounded>
              <Input onChangeText={this.handleChange} value={message} placeholder="Message" />
            </Item>
          </View>
          <Icon
            style={styles.icon}
            name="send"
            type="FontAwesome"
            color="#f50"
            onPress={this.handleSendMessage}
          />
        </View>
        {/* </View> */}
      </KeyboardAvoidingView>
    )
  }
}

export default ChatScreen
