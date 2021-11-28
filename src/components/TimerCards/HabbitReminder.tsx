import React, { SetStateAction } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dark, Light } from '../../../assets/vars/colors';
import { Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux';

import { setIsRelaxModeOn, setIsConcentrationModeOn } from '../../redux/actions/timerActions';

interface Props {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HabbitReminder= ({ setIsModalOpen, isModalOpen }: Props) => {
    const dispatch = useDispatch();
    const { habbit } = useSelector((state: RootState) => state.habbit);
    const { theme } = useSelector((state: RootState) => state.utils);

    const handlePress = () => {
        console.log("modal button pressed");
        dispatch(setIsConcentrationModeOn(false));
        setIsModalOpen(!isModalOpen);
        dispatch(setIsRelaxModeOn(true));
    }

    return (
        <View style={[styles.container, theme === 'light' ? {backgroundColor: Light.primary} : {backgroundColor: Dark.dark}]}>
            <Text style={[styles.title, theme === 'light' ? {color: Light.text} : {color: Dark.text}]}>Il est temps de compléter ta mission!</Text>
            <View style={[styles.divider, theme === 'light' ? {backgroundColor: Light.text} : {backgroundColor: Dark.text}]} />
            <Text style={[styles.habbit, theme === 'light' ? {color: Light.secondary} : {color: Dark.gold}]}>
                {habbit}
            </Text>
            <Button
                onPress={handlePress}
                style={{backgroundColor: Dark.secondary}}
                color={Dark.secondary}
            >
                <Text style={ theme === 'light' ? {color: Light.primary} : {color: Dark.text}}>Mission Accomplie!</Text>
            </Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        borderRadius: 10,
        padding: 15,
        alignSelf: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
        alignSelf: 'center',
        marginBottom: 10
    },
    habbit: {
        fontSize: 20,
        color: Dark.gold,
        width: 250,
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 70,
        textTransform: 'uppercase',
    },
    divider: {
        height: 1,
        width: '70%',
        alignSelf: 'center',
    }
});

export default HabbitReminder;