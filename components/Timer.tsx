import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Timer() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>25:00</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 230,
        height: 230,
        backgroundColor: "#F7B53B",
        borderRadius: 115,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 50,
    }
})