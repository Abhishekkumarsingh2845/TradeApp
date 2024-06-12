import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Live from '../Screens/Live';
import Closed from '../Screens/Closed';
import Colours from '../Constants/Colors';
const Tab = createMaterialTopTabNavigator();

function TopTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarIndicatorStyle: { backgroundColor: Colours.primary },
      }}>
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="Closed" component={Closed} />
    </Tab.Navigator>
  );
}

export default TopTab;
