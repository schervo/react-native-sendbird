import React, { Component } from 'react'
import {
  View,
} from 'react-native'
import {
  Button, Text, Item, Input,
} from 'native-base'

class Login extends Component {
  static navigationOptions = {
    headerTitle: <Text>Login</Text>,
  };

  constructor(props) {
    super(props)

    this.state = {
      userName: '',
    }
  }

  handleChange = (value) => {
    this.setState({
      userName: value,
    })
  }

  handleLogin = () => {
    const { userName } = this.state

    console.log(userName)
  }

  render() {
    const { userName } = this.state
    return (
      <View>
        <View>
          <Item rounded>
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
