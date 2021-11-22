import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { convertToTimeStringFormat } from '../../utils/timers';

// == == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    time: number,
}
// == == == == == == == == == == == == == == == == == == == == == == //


const Timer = ({ time }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{convertToTimeStringFormat(time)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 230,
        height: 230,
        borderRadius: 115,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    text: {
        fontSize: 50,
        color: "#fff",
    }
});

export default Timer;