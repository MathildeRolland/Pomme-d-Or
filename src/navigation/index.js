import React from 'react';


// == NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// == COMPONENT
import LandingPage from '../../src/screens/LandingPage';
import HomePage from '../../src/screens/HomePage';
import Options from '../../src/screens/Options';


const Stack = createNativeStackNavigator();


export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LandingPage">
                <Stack.Screen name="LandingPage" component={LandingPage} />
                <Stack.Screen name="HomePage" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

