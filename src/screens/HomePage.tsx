import React, { useState, useEffect } from 'react';
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


export default function HomePage({ navigation }: HomepageProps) {
    const { isConcentrationModeOn, isRelaxModeOn } = useSelector((state: RootState) => state.timer);

    return (
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.container}>
            { isConcentrationModeOn && <WorkCard /> }
            { isRelaxModeOn && <PauseCard /> }
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