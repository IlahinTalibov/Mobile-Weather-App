import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import Info from '../screens/info';
import Weather from '../screens/weather';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const dimensions = useWindowDimensions();
  
  const isLargeScreen = dimensions.width >= 768;
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerType: isLargeScreen ? 'permanent' : 'back',
          drawerStyle: isLargeScreen ? null : { width: '100%' },
          drawerBackgroundColor: 'transparent', 
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Info" component={Info} />
        <Drawer.Screen name="Weather" component={Weather} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
