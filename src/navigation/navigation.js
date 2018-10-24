import {
  createStackNavigator,
} from 'react-navigation'
import HomeScreen from '../components/screens/home-screen'
import LoginScreen from '../components/screens/login'

const Navigation = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Login',
  },
)

export default Navigation
