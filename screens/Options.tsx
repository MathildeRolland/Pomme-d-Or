import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../vars/colors';

export default function Options() {
    const [concentrationTime, setConcentrationTime] = useState('25');

    const [relaxTime, setRelaxTime] = useState('05')


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Options</Text>

            <View style={styles.fieldset}>
                <Text style={styles.label}>Concentration</Text>
                <View style={styles.timeSetUp}>
                    <TouchableOpacity>
                        <Text style={[styles.changeTime, {fontSize: 25}]}>-</Text>
                    </TouchableOpacity>
                    <TextInput 
                        style={styles.input}
                        keyboardType='numeric'
                        value={concentrationTime}
                        maxLength={120}
                    />
                    <TouchableOpacity>
                        <Text style={styles.changeTime}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.fieldset}>
                <Text style={styles.label}>Pause</Text>
                <View style={styles.timeSetUp}>
                    <TouchableOpacity>
                        <Text style={[styles.changeTime, {fontSize: 25}]}>-</Text>
                    </TouchableOpacity>
                    <TextInput 
                        style={styles.input}
                        keyboardType='numeric'
                        value={relaxTime}
                        maxLength={120}
                    />
                    <TouchableOpacity>
                        <Text style={styles.changeTime}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.fieldset}>
                <Text style={styles.label}>Mission</Text>
                <TextInput 
                    placeholder="Habitude"
                    style={[styles.input, styles.textarea]}    
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkGrey,
        borderRadius: 15,
        marginVertical: 25
    },
    title: {
        width: 140,
        textAlign: 'center',
        fontSize: 25,
        borderBottomWidth: 2,
        borderBottomColor: Colors.light,
        color: Colors.light,
    },
    fieldset: {
        width: 250,
        backgroundColor: Colors.grey,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 7,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    label: {
        color: Colors.light,
    },
    input: {
        backgroundColor: Colors.light,
        borderRadius: 5,
        paddingVertical: 1,
        paddingHorizontal: 10
    },
    textarea: {
        flex: 1,
        marginLeft: 15
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
