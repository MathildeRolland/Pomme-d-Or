import React from 'react';
import { StyleSheet, View } from 'react-native';

// == COMPONENTS
import WorkCard from '../components/TimerCards/WorkCard';
import PauseCard from '../components/TimerCards/PauseCard';

// == == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    concentrationTime: string,
    setConcentrationTime: React.Dispatch<React.SetStateAction<string>>,
    relaxTime: string,
    setRelaxTime: React.Dispatch<React.SetStateAction<string>>
}
// == == == == == == == == == == == == == == == == == == == == == == //


export default function HomePage({ concentrationTime, setConcentrationTime, relaxTime, setRelaxTime }: Props) {
    return (
        <View style={styles.container}>
            <WorkCard 
                concentrationTime={concentrationTime}
                setConcentrationTime={setConcentrationTime}
            />
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