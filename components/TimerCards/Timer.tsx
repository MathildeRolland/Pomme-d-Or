import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { convertToTimeStringFormat } from '../../utils/timers';

// == == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    time: number,
    background: string,
    textColor: string
}
// == == == == == == == == == == == == == == == == == == == == == == //


const Timer = ({ time, background, textColor }: Props) => {
    return (
        <View style={[styles.container, {backgroundColor: background}]}>
            <Text style={[styles.text, {color: textColor}]}>{convertToTimeStringFormat(time)}</Text>
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
        color: "#373737",
    }
});

export default Timer;