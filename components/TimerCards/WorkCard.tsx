import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Colors from '../../vars/colors'

// == COMPONENTS
import Timer from './Timer';
import Button from './Button';

// == == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    concentrationTime: string,
    setConcentrationTime: React.Dispatch<React.SetStateAction<string>>,
}
// == == == == == == == == == == == == == == == == == == == == == == //


const WorkCard = ({ concentrationTime, setConcentrationTime }: Props) => {
    return (
        <View style={styles.container}>
            <Timer 
                concentrationTime={concentrationTime}
                setConcentrationTime={setConcentrationTime}
            />
            <Button text="Stop" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkGrey,
        borderRadius: 15,
    }
})

export default WorkCard;