import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Weather from '../screens/weather';

const Stack = createNativeStackNavigator();

const WeatherStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen 
          name="Weather" 
          component={Weather}  
          options={{ title: 'Weather Forecast' }} // ✅ Correct way to add options
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WeatherStack;
