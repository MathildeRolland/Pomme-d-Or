import React from 'react';
import { StyleSheet, View, Text, Pressable, BackHandler } from 'react-native';
import Colors from '../../vars/colors'

// == COMPONENTS
import Timer from './Timer';
import Button from './Button';

// == == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    concentrationTime: string,
    background: string,
    textColor: string,
    button: string
}
// == == == == == == == == == == == == == == == == == == == == == == //


const WorkCard = ({ concentrationTime, background, textColor, button }: Props) => {
    return (
        <View style={styles.container}>
            <Timer 
                time={concentrationTime}
                background={background}
                textColor={textColor}
            />
            <Button text={button} />
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