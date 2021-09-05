import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../vars/colors';

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
        color: Colors.gold,
        width: 250,
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 70,
        textTransform: 'uppercase',
    }
});

export default HabitReminder;