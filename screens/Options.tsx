import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../vars/colors';

interface OptionsProps {
    concentrationTime: string,
    setConcentrationTime: React.Dispatch<React.SetStateAction<string>>,
    relaxTime: string,
    setRelaxTime: React.Dispatch<React.SetStateAction<string>>,
    currentHabbit: string,
    setCurrentHabbit: React.Dispatch<React.SetStateAction<string>>
}

const Options: React.FC<OptionsProps> = ({ concentrationTime, relaxTime, setConcentrationTime, setRelaxTime, currentHabbit, setCurrentHabbit }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Options</Text>
            <View>
                <View style={styles.fieldset}>
                    <Text style={styles.label}>Concentration (min):</Text>
                    <View style={styles.timeSetUp}>
                        <TouchableOpacity>
                            <Text style={[styles.changeTime, {fontSize: 25}]}>-</Text>
                        </TouchableOpacity>
                        <TextInput 
                            style={styles.input}
                            keyboardType='numeric'
                            defaultValue={concentrationTime}
                            maxLength={3}
                            autoFocus={true}
                            onChangeText={(concentrationTime) => setConcentrationTime(concentrationTime)}
                        />
                        <TouchableOpacity>
                            <Text style={styles.changeTime}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.fieldset}>
                    <Text style={styles.label}>Pause (min):</Text>
                    <View style={styles.timeSetUp}>
                        <TouchableOpacity>
                            <Text style={[styles.changeTime, {fontSize: 25}]}>-</Text>
                        </TouchableOpacity>
                        <TextInput 
                            style={styles.input}
                            keyboardType='numeric'
                            defaultValue={relaxTime}
                            maxLength={3}
                            onChangeText={(relaxTime) => setRelaxTime(relaxTime)}
                        />
                        <TouchableOpacity>
                            <Text style={styles.changeTime}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.fieldset, {alignItems: 'flex-start'}]}>
                    <Text style={styles.textareaLabel}>Mission:</Text>
                    <TextInput 
                        placeholder="Habitude"
                        multiline={true}
                        numberOfLines={5}
                        style={[styles.input, styles.textarea]}
                        defaultValue={currentHabbit}
                        onChangeText={(currentHabbit) => setCurrentHabbit(currentHabbit)}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkGrey,
        borderRadius: 15,
        marginVertical: 50
    },
    title: {
        width: 140,
        textAlign: 'center',
        fontSize: 25,
        borderBottomWidth: 2,
        borderBottomColor: Colors.light,
        color: Colors.light,
        marginBottom: 30
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
    textareaLabel: {
        color: Colors.light,
        alignSelf: 'flex-start'
    },
    input: {
        backgroundColor: Colors.light,
        borderRadius: 5,
        paddingVertical: 1,
        paddingHorizontal: 10
    },
    textarea: {
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 15,
        height: 130,
        paddingTop: 0,
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


export default Options;