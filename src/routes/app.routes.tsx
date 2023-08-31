import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home';
import { Detail } from '../screens/Detail';
import { Cart } from '../screens/Cart';

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName='Detail'>
      <Screen 
        name='Home'
        component={Home}
      />
      <Screen 
        name='Detail'
        component={Detail}
      />

      <Screen 
        name='Cart'
        component={Cart}
      />
    </Navigator>
  );
}