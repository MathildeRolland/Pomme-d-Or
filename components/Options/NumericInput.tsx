import React from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'
import Colors from '../../vars/colors';

// == == == == == == == == == TYPES == == == == == == == == == == //
interface Props {
    defaultValue: string,
    setNewValue: React.Dispatch<React.SetStateAction<string>>
}

interface buttonProps {
    text: string
}
// == == == == == == == == == == == == == == == == == == == == == //


const NumericInput = ({ defaultValue, setNewValue }: Props) => {
    return (
        <View style={styles.timeSetUp}>
            <ChangeTimeButton
                text="-"
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
            />
        </View>
    )
}

const ChangeTimeButton = ({ text }: buttonProps) => {
    return (
        <TouchableOpacity>
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