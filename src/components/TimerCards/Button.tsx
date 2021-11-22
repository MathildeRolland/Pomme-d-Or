import React from 'react';
import { useDispatch } from 'react-redux';
import { SetNewConcentrationTime } from '../../redux/actions';
import { StyleSheet, Pressable, Text } from 'react-native';
import Colors from '../../../assets/vars/colors';

export type Props = {
    text: string,
    time: number,
    setTime: React.Dispatch<React.SetStateAction<number>>,
    background: string,
    textBorder: string,
    toggleMode: React.Dispatch<React.SetStateAction<boolean>>,
    isModeOn: boolean
};

const Button: React.FC<Props> = ({ text, time, setTime, background, textBorder, toggleMode, isModeOn }: Props) => {
    const dispatch = useDispatch();

    // Function to start countdown
    const timeCountdown = (seconds: number, setNewTime: React.Dispatch<React.SetStateAction<number>>, isModeOn: boolean): void => {
        // Set interval every second => return formated new time string
        const countdown = setInterval(() => {
            seconds = seconds - 1;
            // setNewTime(seconds);
            dispatch(SetNewConcentrationTime(seconds));
            if(seconds === 0) {
                clearInterval(countdown);
            }
        }, 1000);
    }
    
    return (
        <Pressable
            style={[styles.button, {backgroundColor: background, borderColor: textBorder}]}
            onPress={() => {
                toggleMode(!isModeOn)
                timeCountdown(time, setTime, isModeOn)
            }}
        >
            <Text style={[styles.buttonTitle, {color: textBorder}]}>{text}</Text>
        </Pressable> 
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: Colors.pink,
        borderRadius: 5,
    },
    buttonTitle: {
        color: Colors.pink,
        marginHorizontal: 25,
        marginVertical: 5
    }
});

export default Button;