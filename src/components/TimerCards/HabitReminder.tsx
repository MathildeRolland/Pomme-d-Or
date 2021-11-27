import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../../assets/vars/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';


const HabitReminder: React.FC = () => {
    const { initHabbit } = useSelector((state: RootState) => state.timer);

    return (
        <View style={styles.container}>
            <Text>Il est temps de compléter ta mission!</Text>
            <Text style={styles.text}>
                {initHabbit}
            </Text>
            <TouchableOpacity>
                C'est fait!
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark
    },
    text: {
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