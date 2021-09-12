import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

// == COMPONENTS
import WorkCard from './TimerCards/WorkCard';
import PauseCard from './TimerCards/PauseCard';
import OptionsCard from './OptionsCard/Options';

export default function HomePage() {
    return (
        <View style={styles.container}>
            {/* <WorkCard /> */}
            {/* <PauseCard /> */}
            <OptionsCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        width: '85%',
        margin: 115,
    },
})