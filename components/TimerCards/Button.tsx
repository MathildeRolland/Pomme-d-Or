import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import Colors from '../../vars/colors';

export type Props = {
    text: string,
};

const Button: React.FC<Props> = ({ text }) => {
    return (
        <Pressable style={styles.button} onPress={() => alert("ptit coucou, signé Smaïl")}>
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