import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../vars/colors';

// == COMPONENTS
import WorkCard from '../components/TimerCards/WorkCard';
import PauseCard from '../components/TimerCards/PauseCard';

// == == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    concentrationTime: string,
    setConcentrationTime: React.Dispatch<React.SetStateAction<string>>,
    relaxTime: string,
    setRelaxTime: React.Dispatch<React.SetStateAction<string>>,
    concentrationButton: string,
    setConcentrationButton: React.Dispatch<React.SetStateAction<string>>,
    relaxButton: string,
    setRelaxButton: React.Dispatch<React.SetStateAction<string>>
}
// == == == == == == == == == == == == == == == == == == == == == == //


export default function HomePage({ concentrationTime, setConcentrationTime, relaxTime, setRelaxTime, concentrationButton, setConcentrationButton, relaxButton, setRelaxButton }: Props) {
    return (
        <View style={styles.container}>
            <WorkCard 
                concentrationTime={concentrationTime}
                background={Colors.gold}
                textColor={Colors.darkGrey}
                button={concentrationButton}
            />
            {/* <PauseCard 
                relaxTime={relaxTime}
                background={Colors.darkGrey}
                textColor={Colors.gold}
                button={relaxButton}
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