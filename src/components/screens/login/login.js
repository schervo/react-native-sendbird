import React, { Component } from 'react'
import {
  View,
} from 'react-native'
import {
  Button, Text, Item, Input,
} from 'native-base'
import SendBird from 'sendbird'
import styles from './styles'

class Login extends Component {
  static navigationOptions = {
    headerTitle: <Text>Login</Text>,
  };

  constructor(props) {
    super(props)

    this.state = {
      userName: '',
    }

    this.sb = SendBird.getInstance()
  }

  handleChange = (value) => {
    this.setState({
      userName: value,
    })
  }

  handleLogin = () => {
    const { userName } = this.state
    const { login, navigation } = this.props

    login(this.sb, userName)
      .then(() => {
        navigation.navigate('Home')
      })
  }

  render() {
    const { userName } = this.state
    return (
      <View style={styles.container}>
        <View>
          <Item rounded style={styles.input}>
            <Input onChangeText={this.handleChange} value={userName} placeholder="Name" />
          </Item>
        </View>
        <View>
          <Button
            onPress={this.handleLogin}
          >
            <Text>Login</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default Login
