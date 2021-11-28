import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Dark, Light } from '../../assets/vars/colors'

// == COMPONENTS
import WorkCard from '../components/TimerCards/WorkCard';
import PauseCard from '../components/TimerCards/PauseCard';
import { RootState, setIsConcentrationModeOn } from '../redux';

// BACKGROUND
const backgroundImage = require("../../assets/background.png");

// == NAVIGATION
import { HomepageProps } from '../navigation/navigationTypes';


export default function HomePage({ navigation }: HomepageProps) {
    const dispatch = useDispatch();
    const { isConcentrationModeOn, isRelaxModeOn } = useSelector((state: RootState) => state.timer);
    const { theme } = useSelector((state: RootState) => state.utils);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(setIsConcentrationModeOn(true));
        })
        return unsubscribe;
    }, [navigation]);
    
    return (
        <ImageBackground source={backgroundImage} resizeMode="cover" style={[styles.container, theme === 'light' ? {backgroundColor: Light.primary} : {backgroundColor: Dark.dark}]}>
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