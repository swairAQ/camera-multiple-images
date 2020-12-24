import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home'
// import ImagePicker from "../screen/ImagePicker";
import Preview from '../screen/Preview'
import { View, Text, TouchableOpacity } from 'react-native';
import Parent from '../screen/Parent'
// console.disableYellowBox = true

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{

                        // animationEnabled: false,
                        headerShown: false,
                        headerTransparent: true,
                    }}
                    name="Parent" component={Parent} />

                <Stack.Screen
                    options={{

                        // animationEnabled: false,
                        headerShown: false,
                        headerTransparent: true,
                    }}
                    name="Home" component={Home} />
                <Stack.Screen
                    options={{

                        animationEnabled: false,
                        headerShown: false,
                        headerTransparent: true,
                    }}
                    name="Preview" component={Preview} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}