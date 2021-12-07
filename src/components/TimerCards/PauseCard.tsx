import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, Vibration, ImageBackground } from 'react-native';
import { Dark, Light } from '../../../assets/vars/colors';

// == RN PAPER
import { Card, Button } from 'react-native-paper';

// == COMPONENTS
import Timer from './Timer';
import { RootState } from '../../redux';

// REDUX
import { setIsRelaxModeOn, setIsConcentrationModeOn } from '../../redux/actions';

// == NAVIGATION
import { PauseCardProps } from '../../navigation/navigationTypes';
import { useFocusEffect } from '@react-navigation/core';


// BACKGROUND
const backgroundImage = require("../../../assets/background.png");


export default function PauseCard({ navigation }: PauseCardProps) {
    const { initRelaxTime, initConcentrationTime } = useSelector((state: RootState) => state.timer);
    const { theme } = useSelector((state: RootState) => state.utils);
    const dispatch = useDispatch();

    // Refs
    const isTimerOn = useRef(false);

    // State
    const [ time, setTime ] = useState<number>(initConcentrationTime)
    const [ buttonText, setButtonText ] = useState("Chill :D");

    // Vibrations settings
    const ONE_SECOND = 1000;
    const VIBRATION_PATTERN = [
        0 * ONE_SECOND,
        1 * ONE_SECOND,
        1 * ONE_SECOND,
        1 * ONE_SECOND,
    ];

    useFocusEffect(
        React.useCallback(() => {
            console.log("pauseCard useEffect")
            setTime(initRelaxTime);
            setButtonText('Start');

            return () => {
                setTime(0);
            }
        }, [])
    );

    // Start countdown
    const timeCountdown = (seconds: number) => {
        // Every second => retrieve 1 second and set new Time
        const countdown = setInterval(() => {
            seconds = seconds - 1;
            setTime(seconds);

            if(isTimerOn.current === false) {
                // Stop time if stop button is pressed
                clearInterval(countdown);
            } else if(seconds === 0) {
                clearInterval(countdown);
                // Make phone vibrate
                Vibration.vibrate(VIBRATION_PATTERN);
                dispatch(setIsRelaxModeOn(false));

                dispatch(setIsConcentrationModeOn(true));

                navigation.navigate('WorkCard');
            }
        }, 1000);

        return countdown;
    }

    // Handle Button Press
    const handlePress = () => {
        if(isTimerOn.current) {
            timeCountdown(time);
            setButtonText('Stop');
        } else {
            setButtonText('Chill')
        }
    }

    
    return (
        <ImageBackground source={backgroundImage} resizeMode="cover" style={[styles.background, theme === 'light' ? {backgroundColor: Light.primary} : {backgroundColor: Dark.dark}]}>
            <View style={styles.container}>
                <Card style={[styles.timer, theme === 'light' ? {backgroundColor: Light.primary} : {backgroundColor: Dark.primary}]}>
                    <Text style={[styles.title, theme === 'light' ? {color: Light.text} : {color: Dark.text}]}>Repos du guerrier</Text>
                    <View style={[styles.divider, theme === 'light' ? {backgroundColor: Light.text} : {backgroundColor: Dark.text}]} />
                    <Timer 
                        time={time}
                        mode = "relax"
                    />
                </Card>
                <Card.Actions style={[styles.buttonContainer, theme === 'light' ? {backgroundColor: Light.secondary} : {backgroundColor: Dark.secondary}]}>
                <Button
                    mode="contained"
                    color={theme === 'light' ? Dark.secondary : Dark.dark}
                    style={styles.button}
                    onPress={() => {
                        isTimerOn.current = !isTimerOn.current;
                        handlePress();
                    }}
                >
                    <Text style={{color: "#fff"}}>{buttonText}</Text>
                </Button> 
                </Card.Actions>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        marginVertical: 70,
        width: '80%',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
        textTransform: 'uppercase',
        marginTop: 15,
        marginBottom: 10
    },
    timer: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    buttonContainer: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingVertical: 20,
        justifyContent: 'center',
    },
    button: {
        width: '40%',
        borderRadius: 5,
    },
    divider: {
        height: 1,
        width: '70%',
        alignSelf: 'center',
    }
});