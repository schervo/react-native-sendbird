import {
  createStackNavigator,
} from 'react-navigation'
import HomeScreen from '../components/screens/home-screen'
import LoginScreen from '../components/screens/login'
import UsersScreen from '../components/screens/users'
import ChatScreen from '../components/screens/chat'
import CreateChannelScreen from '../components/screens/create-channel'
import ChannelsScreen from '../components/screens/channels'

const Navigation = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Users: UsersScreen,
    Chat: ChatScreen,
    CreateChannel: CreateChannelScreen,
    Channels: ChannelsScreen,
  },
  {
    initialRouteName: 'Login',
  },
)

export default Navigation
