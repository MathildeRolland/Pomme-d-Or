import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../assets/vars/colors';

// == COMPONENTS
import WorkCard from '../components/TimerCards/WorkCard';
import PauseCard from '../components/TimerCards/PauseCard';

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

export default function HomePage() {

    return (
        <View style={styles.container}>
            <WorkCard />
            {/* <PauseCard 
                relaxTime={relaxTime}
                setRelaxTime={setRelaxTime}
                background={Colors.darkGrey}
                textColor={Colors.gold}
                button={relaxButton}
                isRelaxOn={isRelaxOn}
                setIsRelaxOn={setIsRelaxOn}
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