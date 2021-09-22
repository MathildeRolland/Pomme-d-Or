import React from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'
import Colors from '../../vars/colors';

// == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    defaultValue: number,
    setNewValue: React.Dispatch<React.SetStateAction<number>>
}

interface buttonProps {
    text: string,
    defaultValue: number,
    setNewValue: React.Dispatch<React.SetStateAction<number>>
}
// == == == == == == == == == == == == == == == == == == == == == //

const NumericInput = ({ defaultValue, setNewValue }: Props) => {
    const convertToSeconds = (minutes: number): number => {
        const seconds = minutes * 60;
        return seconds;
    }


    return (
        <View style={styles.timeSetUp}>
            <ChangeTimeButton
                text="-"
                setNewValue={setNewValue}
                defaultValue={defaultValue}
            />
            <TextInput 
                style={styles.input}
                keyboardType='numeric'
                defaultValue={defaultValue.toString()}
                maxLength={3}
                autoFocus={true}
                onChangeText={(defaultValue) => setNewValue(convertToSeconds(Number(defaultValue)))}
            />
            <ChangeTimeButton 
                text="+"
                setNewValue={setNewValue}
                defaultValue={defaultValue}
            />
        </View>
    )
}

const ChangeTimeButton = ({ text, defaultValue, setNewValue }: buttonProps) => {
    const addMinute = (currentTime: number) => {
        const newMinute = Number(currentTime) + 1;
        return newMinute;
    }

    const removeMinute = (currentTime:number) => {
        const newMinute = Number(currentTime) - 1;
        return newMinute;
    }

    return (
        <TouchableOpacity onPress={() =>  setNewValue(text === "+" ? addMinute(defaultValue) : removeMinute(defaultValue))}>
            <Text style={styles.changeTime}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.light,
        borderRadius: 5,
        paddingVertical: 1,
        paddingHorizontal: 10
    },
    timeSetUp: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    changeTime: {
        marginHorizontal: 10,
        fontSize: 20
    }
});

export default NumericInput;