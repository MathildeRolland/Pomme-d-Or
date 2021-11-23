import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dimensions, StyleSheet, View, Text, Pressable, BackHandler } from 'react-native';
import Colors from '../../../assets/vars/colors'
import { setNewConcentrationTime } from '../../redux/actions';
import { RootState } from '../../redux';

// == RN PAPER
import { Card, Button } from 'react-native-paper';

// == COMPONENTS
import Timer from './Timer';


const WorkCard = () => {
    const { concentrationTime } = useSelector((state: RootState) => state.timer);
    const dispatch = useDispatch();

    const [ time, setTime ] = useState(concentrationTime);
    const isTimerOn = useRef(false);
    const [ buttonText, setButtonText ] = useState("Start");

    // Function to start countdown
    const timeCountdown = (seconds: number) => {
        // Set interval every second => return formated new time string
        const countdown = setInterval(() => {
            seconds = seconds - 1;
            dispatch(setNewConcentrationTime(seconds));
            if(seconds === 0 || isTimerOn.current === false) {
                clearInterval(countdown);
            }
        }, 1000);

        return countdown;
    }

    const handlePress = () => {
        if(isTimerOn.current) {
            timeCountdown(concentrationTime);
            setButtonText('Stop?');
        } else {
            setButtonText('Start');
        }
    }


    return (
        <View style={styles.container}>
            <Card style={styles.timer}>
                <Timer 
                    time={concentrationTime}
                    mode="concentration"
                />
            </Card>
            <Card.Actions style={styles.buttonContainer}>
            <Button
                mode="contained"
                color={Colors.darkGrey}
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
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 70,
        width: '80%',
        alignSelf: 'center',
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
})

export default WorkCard;