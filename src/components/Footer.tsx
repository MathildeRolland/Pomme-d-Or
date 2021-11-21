import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mathilde ROLLAND © | Tous droits réservés.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 12,
    }
})