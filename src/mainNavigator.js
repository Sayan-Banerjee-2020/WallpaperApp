import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import ImageDetails from "./imageDetails"

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const screenOptionStyle = {
        headerShown: false
    };
    const MainNavigator = () => {
        return (
            <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="home" >
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="imageDetails" component={ImageDetails} />
            </Stack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
}