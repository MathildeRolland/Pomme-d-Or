import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { convertToTimeStringFormat } from '../../utils/timers';

// == == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    concentrationTime: string,
    setConcentrationTime: React.Dispatch<React.SetStateAction<string>>,
}
// == == == == == == == == == == == == == == == == == == == == == == //


const Timer = ({ concentrationTime, setConcentrationTime }: Props) => {
    return (
        <View style={styles.container1}>
            <Text style={styles.text1}>{convertToTimeStringFormat(concentrationTime)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        width: 230,
        height: 230,
        backgroundColor: "#F7B53B",
        borderRadius: 115,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    text1: {
        fontSize: 50,
        color: "#373737",
    }
});

export default Timer;