import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import NumberPlease from "react-native-number-please";
import Colors from '../../vars/colors';

export default function Options() {
    // == == == == == CONCENTRATION TIME == == == == == //
    const initialConcentrationTime = [{id: 'concentrationTime', value: 25}];
    const [concentrationTime, setConcentrationTime] = useState(initialConcentrationTime);
    const concentrationTimes = [{
        id: 'concentrationTime',
        label: 'concentration',
        min: 0,
        max: 60,
    }];

    // == == == == == PAUSE TIME == == == == == //
    const initialPauseTime = [{id: 'pauseTime', value: 5}];
    const [pauseTime, setPauseTime] = useState(initialPauseTime);
    const pauseTimes = [{
        id: 'pauseTime',
        label: 'pause',
        min: 0,
        max: 30, 
    }];

    return (
        <View style={styles.container}>
            <Text>Options</Text>
            <View>
                <Text>Concentration</Text>
                <NumberPlease 
                    digits={concentrationTimes}
                    values={initialConcentrationTime}
                    onChange={(values) => setConcentrationTime(values)}
                />
            </View>
            <View>
                <Text>Pause</Text>
                <NumberPlease 
                    digits={pauseTimes}
                    values={initialConcentrationTime}
                    onChange={(values) => setPauseTime(values)}
                />
            </View>
            <View>
                <Text>Mission</Text>
                <TextInput placeholder="Renseignez l'habitude à implémenter" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkGrey,
        borderRadius: 15,
    }
});
