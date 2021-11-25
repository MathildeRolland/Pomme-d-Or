import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Colors from '../../assets/vars/colors';

// == COMPONENTS
import WorkCard from '../components/TimerCards/WorkCard';
import PauseCard from '../components/TimerCards/PauseCard';
import { RootState } from '../redux';

// BACKGROUND
const backgroundImage = require("../../assets/background.png");

// == NAVIGATION
import { HomepageProps } from '../navigation/navigationTypes';



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

export default function HomePage({ navigation }: HomepageProps) {
    const { concentrationTime } = useSelector((state: RootState) => state.timer);

    return (
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.container}>
            { concentrationTime !== 0 && <WorkCard /> }
            { concentrationTime === 0 && <PauseCard /> }
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})