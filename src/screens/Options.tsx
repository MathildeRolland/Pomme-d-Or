import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Dark, Light } from '../../assets/vars/colors';
import { RootState } from '../redux';

// COMPONENTS
import Settings from '../components/Settings';


const Options = () => {

    const { theme } = useSelector((state: RootState) => state.utils);

    return (
        <View style={[styles.container, theme === 'light' ? {backgroundColor: Light.primary} : {backgroundColor: Dark.dark}]}>
            <Text style={[styles.title, theme === "light" ? {backgroundColor: Light.secondary, color: Light.text} : {backgroundColor: Dark.primary, color: Dark.text}]}>Options</Text>
            <Settings />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
    title: {
        width: '100%',
        paddingHorizontal: 45,
        textAlign: 'center',
        fontSize: 18,
        paddingVertical: 10,
        marginVertical: 40,
    },
});


export default Options;