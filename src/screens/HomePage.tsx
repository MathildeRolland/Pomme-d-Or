import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Colors from '../../assets/vars/colors';

// == COMPONENTS
import WorkCard from '../components/TimerCards/WorkCard';
import PauseCard from '../components/TimerCards/PauseCard';
import { RootState } from '../redux';


// == == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    concentrationTime: number,
    setConcentrationTime: React.Dispatch<React.SetStateAction<number>>,
    relaxTime: number,
    setRelaxTime: React.Dispatch<React.SetStateAction<number>>,
    concentrationButton: string,
    setConcentrationButton: React.Dispatch<React.SetStateAction<string>>,
    relaxButton: string,
    setRelaxButton: React.Dispatch<React.SetStateAction<string>>
}
// == == == == == == == == == == == == == == == == == == == == == == //

export default function HomePage({ navigation }) {
    const { concentrationTime } = useSelector((state: RootState) => state.timer);

    return (
        <View style={styles.container}>
            { concentrationTime !== 0 && <WorkCard /> }
            { concentrationTime === 0 && <PauseCard /> }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
})