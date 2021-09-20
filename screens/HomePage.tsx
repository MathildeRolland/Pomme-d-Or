import React from 'react';
import { StyleSheet, View } from 'react-native';

// == COMPONENTS
import WorkCard from '../components/TimerCards/WorkCard';
import PauseCard from '../components/TimerCards/PauseCard';

export default function HomePage() {
    return (
        <View style={styles.container}>
            <WorkCard />
            {/* <PauseCard /> */}
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