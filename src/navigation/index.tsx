import React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './NavigationService';
import {SCREENS} from './screens.tsx';

const Stack = createStackNavigator<ParamListBase>();
export function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        {Object.entries(SCREENS).map(([name, screen]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
