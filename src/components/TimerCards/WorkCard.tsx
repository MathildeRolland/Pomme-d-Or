import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, Modal, Alert, ImageBackground } from 'react-native';
import Colors from '../../../assets/vars/colors'
import { setIsConcentrationModeOn, setIsRelaxModeOn } from '../../redux/actions';
import { RootState } from '../../redux';
import HabitReminder from './HabitReminder';

// == RN PAPER
import { Card, Button } from 'react-native-paper';

// == COMPONENTS
import Timer from './Timer';


const WorkCard = () => {
    const { initConcentrationTime } = useSelector((state: RootState) => state.timer);
    const dispatch = useDispatch();

    // State
    const [ time, setTime ] = useState<number>(initConcentrationTime);
    const [ buttonText, setButtonText ] = useState<string>("Start");
    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
    
    // Refs
    const isTimerOn = useRef(false);


    // Function to start countdown
    const timeCountdown = (seconds: number) => {
        // Set interval every second => return formated new time string
        const countdown = setInterval(() => {
            seconds = seconds - 1;
            // dispatch(setNewConcentrationTime(seconds));
            setTime(seconds);
            if(isTimerOn.current === false) {
                clearInterval(countdown);
            } else if(seconds === 0) {
                clearInterval(countdown);
                setIsModalOpen(true);
                // dispatch(setIsConcentrationModeOn(false));
            }
        }, 1000);
    }

    // Function handle button press
    const handlePress = () => {
        if(isTimerOn.current) {
            timeCountdown(time);
            setButtonText('Stop?');
        } else {
            setButtonText('Start');
        }
    }

    // Component
    return (
        <>
            <Text style={styles.title}>Time to Focus</Text>
            <View style={styles.container}>
                <Card style={styles.timer}>
                    <Timer 
                        time={time}
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
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalOpen}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setIsModalOpen(!isModalOpen)}}
                >
                    <View style={styles.viewWrapper}>
                        <HabitReminder />
                    </View>
                </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 50,
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
    viewWrapper: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#383838e6"
    },
})

export default WorkCard;