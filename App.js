
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/homeScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    
    
  },
  {
    initialRouteName:'Home',
    defaultNavigationOptions: {
      title: 'Food Search'
    }
  }
); 
export default createAppContainer(navigator); 
