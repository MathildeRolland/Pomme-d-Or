// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Platform, Text, SafeAreaView, StatusBar } from 'react-native';

// == COMPONENTS
import Burger from './Burger';

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Coucou</Text>
            <Burger />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})