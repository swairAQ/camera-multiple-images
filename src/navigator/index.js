import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home'
import Preview from '../screen/Preview'
import { View, Text, Button } from 'react-native';
console.disableYellowBox = true

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerShown: false,
                        headerTransparent: true,
                    }}
                    name="Home" component={Home} />
                <Stack.Screen name="Preview" component={Preview} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}