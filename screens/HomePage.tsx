import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../vars/colors';

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

export default function HomePage({
    concentrationTime,
    setConcentrationTime,
    relaxTime,
    setRelaxTime,
    concentrationButton,
    setConcentrationButton,
    relaxButton,
    setRelaxButton
}: Props) {
    const [isConcentrationOn, setIsConcentrationOn] = useState(false);
    const [isRelaxOn, setIsRelaxOn] = useState(false);

    return (
        <View style={styles.container}>
            {/* <WorkCard 
                concentrationTime={concentrationTime}
                setConcentrationTime={setConcentrationTime}
                background={Colors.gold}
                textColor={Colors.darkGrey}
                button={concentrationButton}
                isConcentrationOn={isConcentrationOn}
                setIsConcentrationOn={setIsConcentrationOn}
            /> */}
            <PauseCard 
                relaxTime={relaxTime}
                setRelaxTime={setRelaxTime}
                background={Colors.darkGrey}
                textColor={Colors.gold}
                button={relaxButton}
                isRelaxOn={isRelaxOn}
                setIsRelaxOn={setIsRelaxOn}
            />
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