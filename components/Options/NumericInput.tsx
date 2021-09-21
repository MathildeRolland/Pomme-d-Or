import React from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'
import Colors from '../../vars/colors';

// == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    defaultValue: string,
    setNewValue: React.Dispatch<React.SetStateAction<string>>
}

interface buttonProps {
    text: string,
    defaultValue: string,
    setNewValue: React.Dispatch<React.SetStateAction<string>>
    // handlePress: void
}
// == == == == == == == == == == == == == == == == == == == == == //

const NumericInput = ({ defaultValue, setNewValue }: Props) => {
    return (
        <View style={styles.timeSetUp}>
            <ChangeTimeButton
                text="-"
                setNewValue={setNewValue}
                defaultValue={defaultValue}
                // handlePress={removeMinute(defaultValue, setNewValue)}
            />
            <TextInput 
                style={styles.input}
                keyboardType='numeric'
                defaultValue={defaultValue}
                maxLength={3}
                autoFocus={true}
                onChangeText={(defaultValue) => setNewValue(defaultValue)}
            />
            <ChangeTimeButton 
                text="+"
                setNewValue={setNewValue}
                defaultValue={defaultValue}
                // handlePress={addMinute(defaultValue, setNewValue)}
            />
        </View>
    )
}

const ChangeTimeButton = ({ text, defaultValue, setNewValue }: buttonProps) => {
    const addMinute = (currentTime: string) => {
        const newMinute = Number(currentTime) + 1;
        return newMinute.toString();
    }

    const removeMinute = (currentTime:string) => {
        const newMinute = Number(currentTime) - 1;
        return newMinute.toString();
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