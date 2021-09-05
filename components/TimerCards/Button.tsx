import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

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
        borderColor: "#E49AB0",
        borderRadius: 5,
        color: "#E49AB0",
    },
    buttonTitle: {
        color: "#E49AB0",
        marginHorizontal: 25,
        marginVertical: 5
    }
});

export default Button;