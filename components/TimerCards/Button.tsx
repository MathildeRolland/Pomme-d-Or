import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import Colors from '../../vars/colors';
import { timeCountdown } from '../../utils/timers';

export type Props = {
    text: string,
    time: number,
    setTime: React.Dispatch<React.SetStateAction<number>>
};

const Button: React.FC<Props> = ({ text, time, setTime }: Props) => {
    return (
        <Pressable style={styles.button} onPress={() => timeCountdown(time, setTime)}>
            <Text style={styles.buttonTitle}>{text}</Text>
        </Pressable> 
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
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