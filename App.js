import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import searchScreen from './src/screens/searchScreen'
import resultShowScreen from './src/screens/resultShowScreen'


const navigator = createStackNavigator({
Search : searchScreen,
ResultShow : resultShowScreen

},{
  initialRouteName : 'Search',
  defaultNavigationOptions : {
    title : 'BusinessSearch'
  }
})

export default createAppContainer(navigator)