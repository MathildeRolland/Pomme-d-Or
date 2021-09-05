import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Colors from '../../vars/colors';

// == COMPONENTS
import Timer from './Timer';
import Button from './Button';

export default function WorkCard() {
    return (
        <View style={styles.container}>
            <Timer />
            <Button text="Stop" />
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
    }
})