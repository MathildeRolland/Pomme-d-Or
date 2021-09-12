import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Timer() {
    return (
        <View style={styles.container1}>
            <Text style={styles.text1}>25:00</Text>
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
})