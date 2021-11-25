import React from 'react';
import Colors from '../../assets/vars/colors';
import { MaterialIcons } from '@expo/vector-icons';


// == NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamsList } from '../navigation/navigationTypes';

// == COMPONENT
import LandingPage from '../screens/LandingPage';
import HomePage from '../screens/HomePage';
import Options from '../screens/Options';
import { Button } from 'react-native-paper';



const Stack = createNativeStackNavigator<StackParamsList>();


export const AppNavigation: React.FC<StackParamsList> = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LandingPage">
                <Stack.Screen
                    name="LandingPage"
                    component={LandingPage}
                    options={({ navigation }) => ({
                        title: `Pomme d'Or`,
                        headerStyle: {
                            backgroundColor: Colors.gold,
                        },
                        headerRight: () => (
                            <Button
                                title="Paramètres"
                                color={Colors.dark}
                                onPress={() => navigation.navigate('Settings')}
                                icon={() => <MaterialIcons name="settings" size={24} color={Colors.dark} />}
                            />
                        )
                    })}
                />
                <Stack.Screen
                    name="HomePage"
                    component={HomePage}
                    options={{
                        title: 'Accueil',
                        headerStyle: {
                            backgroundColor: Colors.gold
                        }
                    }}
                />
                {/* <Stack.Screen name="Settings" component={Options} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

