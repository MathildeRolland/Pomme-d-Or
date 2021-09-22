import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../vars/colors';

// == COMPONENTS
import WorkCard from '../components/TimerCards/WorkCard';
import PauseCard from '../components/TimerCards/PauseCard';

// == == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    concentrationTime: string,
    relaxTime: string,
}
// == == == == == == == == == == == == == == == == == == == == == == //


export default function HomePage({ concentrationTime, relaxTime }: Props) {
    return (
        <View style={styles.container}>
            <WorkCard 
                concentrationTime={concentrationTime}
                background={Colors.gold}
                textColor={Colors.darkGrey}
            />
            {/* <PauseCard 
                relaxTime={relaxTime}
                background={Colors.darkGrey}
                textColor={Colors.gold}
            /> */}
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