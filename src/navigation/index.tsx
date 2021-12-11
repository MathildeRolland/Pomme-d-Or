import React, { useState,useEffect } from 'react';
import { Dark, Light } from '../../assets/vars/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Switch, Pressable, Image } from 'react-native';
import { useDispatch } from 'react-redux';


// == NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamsList } from '../navigation/navigationTypes';

// REDUX
import { switchTheme } from '../redux/actions'

// == COMPONENT
import LandingPage from '../screens/LandingPage';
import WorkCard from '../components/TimerCards/WorkCard';
import PauseCard from '../components/TimerCards/PauseCard'
import Options from '../screens/Options';



const Stack = createNativeStackNavigator<StackParamsList>();


export const AppNavigation: React.FC<StackParamsList> = () => {
    const dispatch = useDispatch();

    // State
    const [ isToggle, setIsToggle ] = useState(false);

    // Toggle theme
    useEffect(() => {
        isToggle === true ? dispatch(switchTheme('dark')) : dispatch(switchTheme('light'));
    }, [isToggle]);


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LandingPage">
                <Stack.Screen
                    name="LandingPage"
                    component={LandingPage}
                    options={({ navigation }) => ({
                        title: "Pomme d'Or",
                        headerStyle: {
                            backgroundColor: Dark.gold,
                        },
                        headerTitle: () => (
                            <Image 
                                source={require('../../assets/logo.png')}
                                style={{width: 60, height: 60}}
                            />
                        ),
                        headerRight: () => (
                            <Switch 
                                onValueChange={(() => setIsToggle(!isToggle))}
                                value={isToggle}
                                thumbColor={isToggle ? Dark.dark : Light.primary}
                                trackColor={{false: Light.secondary, true: Dark.primary }}
                            />
                        )
                    })}
                />
                <Stack.Screen
                    name="WorkCard"
                    component={WorkCard}
                    options={({ navigation }) => ({
                        title: 'Concentration',
                        headerStyle: {
                            backgroundColor: Dark.gold
                        },
                        headerRight: () => (
                            <>
                                <Switch 
                                    onValueChange={() => setIsToggle(!isToggle)}
                                    value={isToggle}
                                    thumbColor={isToggle ? Dark.dark : Light.primary}
                                    trackColor={{false: Light.secondary, true: Dark.primary }}
                                />
                                <Pressable
                                    onPress={() => navigation.navigate('Settings')}
                                >
                                    <MaterialIcons name="settings" size={24} color={Dark.dark} />
                                </Pressable>
                            </>
                        )
                    })}
                />
                 <Stack.Screen
                    name="PauseCard"
                    component={PauseCard}
                    options={({ navigation }) => ({
                        title: 'Pause',
                        headerStyle: {
                            backgroundColor: Dark.gold
                        },
                        headerRight: () => (
                            <>
                                <Switch 
                                    onValueChange={() => setIsToggle(!isToggle)}
                                    value={isToggle}
                                    thumbColor={isToggle ? Dark.dark : Light.primary}
                                    trackColor={{false: Light.secondary, true: Dark.primary }}
                                />
                                <Pressable
                                    onPress={() => navigation.navigate('Settings')}
                                >
                                    <MaterialIcons name="settings" size={24} color={Dark.dark} />
                                </Pressable>
                            </>
                        )
                    })}
                />
                <Stack.Screen
                    name="Settings"
                    component={Options}
                    options={({ navigation }) => ({
                        title: 'Options',
                        headerStyle: {
                            backgroundColor: Dark.gold
                        },
                        headerRight: () => (
                            <Switch 
                                onValueChange={() => setIsToggle(!isToggle)}
                                value={isToggle}
                                thumbColor={isToggle ? Dark.dark : Light.primary}
                                trackColor={{false: Light.secondary, true: Dark.primary }}
                            />
                        )
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

