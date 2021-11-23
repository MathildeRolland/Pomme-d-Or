import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { convertToTimeStringFormat } from '../../utils/timers';
import Colors from '../../../assets/vars/colors';

// == == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    time: number,
    mode: string
}
// == == == == == == == == == == == == == == == == == == == == == == //


const Timer = ({ time, mode }: Props) => {
    return (
        <View style={[styles.container, mode === "concentration" ? {backgroundColor: Colors.gold} : {backgroundColor: "#222", borderWidth: 5, borderColor: Colors.gold}]}>
            <Text style={styles.text}>{convertToTimeStringFormat(time)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 230,
        height: 230,
        // backgroundColor: Colors.gold,
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        alignSelf: 'center'
    },
    text: {
        fontSize: 50,
        color: "#fff",
    }
});

export default Timer;