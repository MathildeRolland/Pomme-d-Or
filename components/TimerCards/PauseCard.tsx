import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Colors from '../../vars/colors';

// == COMPONENTS
import Timer from './Timer';
import Button from './Button';

// == == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    relaxTime: string,
    background: string,
    textColor: string,
    button: string
}
// == == == == == == == == == == == == == == == == == == == == == == //



export default function PauseCard({ relaxTime, background, textColor, button }: Props) {
    return (
        <View style={styles.container}>
            <Timer 
                time={relaxTime}
                background={background}
                textColor={textColor}
            />
            <Text>{button}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.gold,
        borderRadius: 15,
    },
});