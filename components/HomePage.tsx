import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// == COMPONENTS
import Timer from './Timer';

export default function HomePage() {
    return (
        <View style={styles.container}>
            <Timer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        width: '85%',
        margin: 115,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#373737",
        borderRadius: 15,
    },
    timer: {
        width: 230,
        height: 230,
        backgroundColor: "#F7B53B",
        borderRadius: 115,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerText: {
        fontSize: 50,
    }
})