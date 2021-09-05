import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export type Props = {
    habit: string,
};

const HabitReminder: React.FC<Props> = ({ habit }) => {
    return (
        <Text style={styles.container}>
            {habit}
        </Text>
    )
};

const styles = StyleSheet.create({
    container: {
        fontSize: 30,
        color: "#F7B53B",
        width: 250,
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 70,
        textTransform: 'uppercase',
    }
});

export default HabitReminder;