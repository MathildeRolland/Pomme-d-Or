import React from 'react';
import { useDispatch } from 'react-redux';
import { SetNewConcentrationTime } from '../../redux/actions';
import { StyleSheet, Pressable, Text } from 'react-native';
import Colors from '../../../assets/vars/colors';

export type Props = {
    time: number,
};

const Button: React.FC<Props> = ({ time }: Props) => {
    const dispatch = useDispatch();

    // Function to start countdown
    const timeCountdown = (seconds: number): void => {
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
            style={[styles.button]}
            onPress={() => {
                timeCountdown(time)
            }}
        >
            <Text>Start</Text>
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