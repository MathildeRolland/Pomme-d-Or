import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../../assets/vars/colors';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';


const HabitReminder: React.FC = () => {
    const { habbit } = useSelector((state: RootState) => state.habbit);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Il est temps de compléter ta mission!</Text>
            <View style={styles.divider} />
            <Text style={styles.habbit}>
                {habbit}
            </Text>
            <Button
                onPress={() => {
                    console.log("modal button pressed");
                }}
                color={Colors.dark}
                style={styles.button}
            >
                <Text style={{color: Colors.light}}>Mission Accomplie!</Text>
            </Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: Colors.light,
        borderRadius: 10,
        padding: 15,
        alignSelf: 'center',
        alignItems: 'center',
        shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    },
    title: {
        fontSize: 17,
        alignSelf: 'center',
        marginBottom: 10
    },
    habbit: {
        fontSize: 20,
        color: Colors.gold,
        width: 250,
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 70,
        textTransform: 'uppercase',
    },
    button: {
        backgroundColor: Colors.dark,
    },
    divider: {
        height: 1,
        width: '70%',
        alignSelf: 'center',
        backgroundColor: Colors.dark
    }
});

export default HabitReminder;