
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/homeScreen';
import ResultScreen from './src/screens/resultsScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Result: ResultScreen
    
  },
  {
    initialRouteName:'Home',
    defaultNavigationOptions: {
      title: 'Food Search'
    }
  }
); 
export default createAppContainer(navigator); 
