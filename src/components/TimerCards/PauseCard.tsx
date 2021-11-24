import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../../assets/vars/colors';

// == RN PAPER
import { Card, Button } from 'react-native-paper';

// == COMPONENTS
import Timer from './Timer';
import { RootState } from '../../redux';

import { setNewRelaxTime, setNewConcentrationTime } from '../../redux/actions';



export default function PauseCard() {
    const { relaxTime, initConcentrationTime } = useSelector((state: RootState) => state.timer);
    const dispatch = useDispatch();
    const isTimerOn = useRef(false);

    const [ buttonText, setButtonText ] = useState('Chill :D');

     // Function to start countdown
     const timeCountdown = (seconds: number) => {
        // Set interval every second => return formated new time string
        const countdown = setInterval(() => {
            seconds = seconds - 1;
            dispatch(setNewRelaxTime(seconds));

            if(isTimerOn.current === false) {
                clearInterval(countdown);
            } else if(seconds === 0) {
                clearInterval(countdown);
                dispatch(setNewConcentrationTime(initConcentrationTime));
            }
        }, 1000);

        return countdown;
    }

    const handlePress = () => {
        console.log('relax time' , relaxTime);
        if(isTimerOn.current) {
            timeCountdown(relaxTime);
            setButtonText('Back To Work?');
        } else {
            setButtonText('Chill')
        }
    }
    
    return (
        <>
            <Text style={styles.title}>A few minutes to relax</Text>
            <View style={styles.container}>
                <Card style={styles.timer}>
                    <Timer 
                        time={relaxTime}
                        mode = "relax"
                    />
                </Card>
                <Card.Actions style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    color={Colors.gold}
                    style={styles.button}
                    onPress={() => {
                        isTimerOn.current = !isTimerOn.current;
                        handlePress();
                    }}
                >
                    {buttonText}
                </Button> 
                </Card.Actions>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 70,
        width: '80%',
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
        textTransform: 'uppercase'
    },
    timer: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: Colors.darkGrey,
    },
    buttonContainer: {
        backgroundColor: "#4E4E4E",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingVertical: 20,
        justifyContent: 'center',
    },
    button: {
        width: '40%',
        borderRadius: 5,
    },
});