import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// == COMPONENTS
import Burger from './Burger';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text>Coucou</Text>
            <Burger />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: .5,
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
    }
})