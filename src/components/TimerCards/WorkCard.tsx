import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, Modal, Alert, ImageBackground } from 'react-native';
import { Dark, Light } from '../../../assets/vars/colors'
import { setIsConcentrationModeOn, setIsRelaxModeOn } from '../../redux/actions';
import { RootState } from '../../redux';
import HabbitReminder from './HabbitReminder';

// == RN PAPER
import { Card, Button } from 'react-native-paper';

// == COMPONENTS
import Timer from './Timer';


const WorkCard = () => {
    const { initConcentrationTime } = useSelector((state: RootState) => state.timer);
    const dispatch = useDispatch();
    const { theme } = useSelector((state: RootState) => state.utils);

    // State
    const [ time, setTime ] = useState<number>(initConcentrationTime);
    const [ buttonText, setButtonText ] = useState<string>("Start");
    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
    
    // Refs
    const isTimerOn = useRef(false);

    // Clear Countdown when unmount
    useEffect(() => {
        return () => {
            isTimerOn.current = false;
        }
    }, [])

    // Function to start countdown
    const timeCountdown = (seconds: number) => {
        // Set interval every second => return formated new time string
        const countdown = setInterval(() => {
            seconds = seconds - 1;
            setTime(seconds);
            if(isTimerOn.current === false) {
                clearInterval(countdown);
            } else if(seconds === 0) {
                clearInterval(countdown);
                setIsModalOpen(true);
            }
        }, 1000);
    }

    // Function handle button press
    const handlePress = () => {
        if(isTimerOn.current) {
            timeCountdown(time);
            setButtonText('Stop');
        } else {
            setButtonText('Start');
        }
    }

    // Component
    return (
        <>
            <View style={styles.container}>
                <Card style={[styles.timer, theme === 'light' ? {backgroundColor: Light.primary} : {backgroundColor: Dark.primary}]}>
                    <Text style={[styles.title, theme === 'light' ? {color: Light.text} : {color: Dark.text}]}>Time to Focus</Text>
                    <View style={[styles.divider, theme === 'light' ? {backgroundColor: Light.text} : {backgroundColor: Dark.text}]} />
                    <Timer 
                        time={time}
                        mode="concentration"
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
                    <HabbitReminder setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
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
        borderRadius: 15,
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
        marginBottom: 5
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
    viewWrapper: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#383838e6"
    },
    divider: {
        height: 1,
        width: '70%',
        alignSelf: 'center',
    }
})

export default WorkCard;