import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Keyboard } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { Dark, Light } from '../../assets/vars/colors';
import NumericInput from 'react-native-numeric-input';
import {
    SetNewConcentrationTime,
    SetNewRelaxTime,
    setNewHabbit
  } from '../redux/actions';

// == NAVIGATION
import { useNavigation } from '@react-navigation/core';
import { workCardNavigationType } from '../navigation/navigationTypes';

const Settings = () => {
    const dispatch = useDispatch();
    
    // Selectors
    const { initConcentrationTime, initRelaxTime } = useSelector((state: RootState) => state.timer);
    const { habbit } = useSelector((state: RootState) => state.habbit);

    const { theme } = useSelector((state: RootState) => state.utils);
    const navigation = useNavigation<workCardNavigationType>();

    // State
    const [ initConcentration, setInitConcentration ] = useState<number>(initConcentrationTime / 60);
    const [ initRelax, setInitRelax ] = useState<number>(initRelaxTime / 60);
    const [ initHabbit, setInitHabbit ] = useState<string>(habbit);    
    
    // Handle submit function
    const handleSubmit = () => {
        dispatch(SetNewConcentrationTime(initConcentration * 60));
        dispatch(SetNewRelaxTime(initRelax * 60));
        dispatch(setNewHabbit(initHabbit));
        navigation.navigate('WorkCard');
    }

    return (            
      <View 
        style={[styles.times, theme === 'light' ? {backgroundColor: Light.primary} : {backgroundColor: Dark.primary}]}
      >
        <View style={[styles.titleContainer, styles.card, theme === "light" ? {backgroundColor: Light.secondary} : {backgroundColor: Dark.secondary}]}>
          <Text style={[styles.timeTitle, theme === 'light' ? {color: Light.text} : {color: Dark.text}]}>
            Initialise tes temps:
          </Text>
        </View>
        <View style={styles.initTime}>
          <Text style={[styles.timeTitle, theme === "light" ? {color: Light.text} : {color: Dark.text}]}>Concentration:</Text>
          { initConcentration !== undefined && 
              <NumericInput
                minValue={1}
                maxValue={120}
                onChange={value => setInitConcentration(value)} 
                step={5}
                value={initConcentration}
                borderColor={theme === 'light' ? Light.secondary : Dark.secondary}
                totalWidth={110}
                totalHeight={38}
                textColor={theme === "light" ? Light.text : Dark.text}
                rightButtonBackgroundColor={theme === 'light' ? Light.secondary : Dark.secondary}
                leftButtonBackgroundColor={theme === 'light' ? Light.secondary : Dark.secondary}
                iconStyle={{color: theme === 'light' ? Light.text : Dark.text}}
                rounded={true}
                containerStyle={{alignSelf: 'center', marginVertical: 5, borderRadius: 10}}
              />
          }
        </View>
        <View style={styles.initTime}>
          <Text style={[styles.timeTitle, theme === "light" ? {color: Light.text} : {color: Dark.text}]}>Pause:</Text>
          { initRelax !== undefined && 
            <NumericInput
              minValue={1}
              maxValue={60}
              onChange={value => value > 0 ? setInitRelax(value) : setInitRelax(1)} 
              step={1}
              value={initRelax}
              borderColor={theme === 'light' ? Light.secondary : Dark.secondary}
              totalWidth={110}
              totalHeight={38}
              textColor={theme === "light" ? Light.text : Dark.text}
              rightButtonBackgroundColor={theme === 'light' ? Light.secondary : Dark.secondary}
              leftButtonBackgroundColor={theme === 'light' ? Light.secondary : Dark.secondary}
              iconStyle={{color: theme === 'light' ? Light.text : Dark.text}}
              rounded={true}
              containerStyle={{alignSelf: 'center', marginVertical: 5, borderRadius: 10}}
            />
          }
        </View>
        <View style={styles.initTime}>
          <Text style={[styles.timeTitle, theme === "light" ? {color: Light.text} : {color: Dark.text}]}>Habitude ?? impl??menter:</Text>
          <TextInput
            multiline={true}
            maxLength={150}
            value={initHabbit}
            blurOnSubmit={true}
            onSubmitEditing={() => Keyboard.dismiss()}
            style={[styles.textarea, theme === 'light' ? {backgroundColor: Light.secondary, color: Light.text} : {backgroundColor: Dark.secondary, color: Dark.text}]}
            onChangeText={(value) => setInitHabbit(value)}
          />
        </View>
        <Button
          mode="contained"
          color={Dark.gold}
          style={styles.button}
          onPress={handleSubmit}
        >
          Let's go!
        </Button>
      </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 23,
        alignSelf: 'center'
      },
      appName: {
        color: Dark.gold,
        fontWeight: 'bold',
        fontStyle: 'italic'
      },
      subtitle: {
        paddingHorizontal: 45,
        textAlign: 'center',
        marginBottom: 25,
        fontSize: 18,
        paddingVertical: 10,
      },
      card: {
        textTransform: 'uppercase',
        width: '100%',
        textAlign: 'center',
        paddingVertical: 10,
        marginTop: 0
      },
      times: {
        width: '80%',
        paddingBottom: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      initTime: {
        marginBottom: 15,
      },
      titleContainer: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 5
      },
      timeTitle: {
        fontSize: 18,
        alignSelf: 'center',
        marginVertical: 2,
      },
      textarea: {
        width: '80%',
        borderRadius: 5,
        padding: 10,
        alignSelf: 'center',
        textAlign: 'center',
        maxHeight: 60
      },
      button: {
        marginTop: 10,
        marginBottom: 10,
        width: '40%',
        alignSelf: 'center'
      }
});

export default Settings;