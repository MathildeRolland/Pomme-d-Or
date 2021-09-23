import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../vars/colors';

// == COMPONENTS
import Timer from './Timer';
import Button from './Button';

// == == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    relaxTime: number,
    setRelaxTime: React.Dispatch<React.SetStateAction<number>>,
    background: string,
    textColor: string,
    button: string
}
// == == == == == == == == == == == == == == == == == == == == == == //



export default function PauseCard({ relaxTime, setRelaxTime, background, textColor, button }: Props) {
    return (
        <View style={styles.container}>
            <Timer 
                time={relaxTime}
                background={background}
                textColor={textColor}
            />
            <Button 
                text={button}
                time={relaxTime}
                setTime={setRelaxTime}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.gold,
        borderRadius: 15,
    },
});