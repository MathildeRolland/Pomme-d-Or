import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import Colors from '../../../assets/vars/colors';
import { timeCountdown } from '../../utils/timers';

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