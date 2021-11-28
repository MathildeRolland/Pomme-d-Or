import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dark, Light } from '../../assets/vars/colors'
import NumericInput from 'react-native-numeric-input';
import { Button } from 'react-native-paper';
import {
  initConcentrationTime,
  initRelaxTime,
  setIsConcentrationModeOn,
  setNewHabbit
} from '../redux/actions';
import { RootState } from '../redux';

// == COMPONENTS
import Footer from '../../src/components/Footer';

// == BACKGROUND
const backgroundImage = require("../../assets/background.png");

// == NAVIGATION
import { LandingPageProps } from '../navigation/navigationTypes';


export default function LandingPage({ navigation }: LandingPageProps) {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.utils);

  // State
  const [ initConcentration, setInitConcentration ] = useState<number | undefined>(25);
  const [ initRelax, setInitRelax ] = useState<number | undefined>(5);
  const [ initHabbit, setInitHabbit ] = useState<string>("");


  const handleSubmit = () => {
    dispatch(initConcentrationTime(initConcentration*60));
    dispatch(initRelaxTime(initRelax*60));
    dispatch(setIsConcentrationModeOn(true));
    dispatch(setNewHabbit(initHabbit))
    navigation.navigate('HomePage');
  }

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={[styles.container, theme === 'light' ? {backgroundColor: Light.primary} : {backgroundColor: Dark.dark}]}
    >

      <Text style={[styles.subtitle, theme === "light" ? {backgroundColor: Light.primary, color: Light.text} : {backgroundColor: Dark.primary, color: Dark.text}]}>Booste ta concentration tout en créant de nouvelles habitudes!</Text>

      <View style={[styles.times, theme === 'light' ? {backgroundColor: Light.primary} : {backgroundColor: Dark.primary}]}>
        <Text style={[styles.timeTitle, styles.card, theme === "light" ? {backgroundColor: Light.secondary, color: Light.text} : {backgroundColor: Dark.secondary, color: Dark.text}]}>
          Initialise tes temps:
        </Text>
        <View style={styles.initTime}>
          <Text style={[styles.timeTitle, theme === "light" ? {color: Light.text} : {color: Dark.text}]}>Concentration:</Text>
          <NumericInput
            onChange={value => setInitConcentration(value)} 
            step={1}
            value={initConcentration}
            borderColor={theme === 'light' ? Light.secondary : Dark.secondary}
            totalWidth={110}
            totalHeight={38}
            textColor={theme === "light" ? Light.text : Dark.text}
            rightButtonBackgroundColor={theme === 'light' ? Light.secondary : Dark.secondary}
            leftButtonBackgroundColor={theme === 'light' ? Light.secondary : Dark.secondary}
            iconStyle={{color: theme === 'light' ? Light.text : Dark.text}}
            rounded={true}
            containerStyle	={{alignSelf: 'center', marginVertical: 5}}
          />
        </View>
        <View style={styles.initTime}>
          <Text style={[styles.timeTitle, theme === "light" ? {color: Light.text} : {color: Dark.text}]}>Pause:</Text>
          <NumericInput
            onChange={value => setInitRelax(value)} 
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
            containerStyle={{alignSelf: 'center', marginVertical: 5}}
          />
        </View>
        <View style={styles.initTime}>
          <Text style={[styles.timeTitle, theme === "light" ? {color: Light.text} : {color: Dark.text}]}>Habitude à implémenter:</Text>
          <TextInput
            multiline={true}
            maxLength={150}
            value={initHabbit}
            blurOnSubmit={true}
            onSubmitEditing={() => Keyboard.dismiss()}
            style={[styles.textarea, theme === 'light' ? {backgroundColor: Light.secondary} : {backgroundColor: Dark.secondary}]}
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
      <Footer />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
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
      overflow: 'hidden'
    },
    initTime: {
      marginBottom: 15
    },
    timeTitle: {
      fontSize: 15,
      alignSelf: 'center',
      marginVertical: 5,
      color: Light.text
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
      marginTop: 15,
      marginBottom: 10,
      width: '40%',
      alignSelf: 'center'
    }
  });