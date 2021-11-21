import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Burger() {
    return (
        <View style={styles.container}>
            <View style={styles.burgerdot}></View>
            <View style={styles.burgerdot}></View>
            <View style={styles.burgerdot}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
    },
    burgerdot: {
        width: 7,
        height: 7,
        backgroundColor: "#373737",
        borderRadius: 50,
        margin: 2,
    }
})