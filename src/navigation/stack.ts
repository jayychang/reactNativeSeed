import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from 'src/screens/Home'

import { Routes } from 'src/helpers/navigation';

const Stack = createStackNavigator({
  [Routes.HOME]: {
    screen: HomeScreen,
  },
})

export default Stack
