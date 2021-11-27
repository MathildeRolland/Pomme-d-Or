import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../../assets/vars/colors'
import NumericInput from 'react-native-numeric-input';
import { Button } from 'react-native-paper';
import {
  initConcentrationTime,
  initRelaxTime,
  setIsConcentrationModeOn,
  setNewHabbit
} from '../redux/actions';

// == COMPONENTS
import Footer from '../../src/components/Footer';

// == BACKGROUND
const backgroundImage = require("../../assets/background.png");

// == NAVIGATION
import { LandingPageProps } from '../navigation/navigationTypes';


export default function LandingPage({ navigation }: LandingPageProps) {
  const dispatch = useDispatch();
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
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.container}>

      <Text style={styles.subtitle}>Booste ta concentration tout en créant de nouvelles habitudes!</Text>

      <View style={styles.times}>
        <Text style={{...styles.timeTitle, ...styles.card}}>Initialise tes temps:</Text>
        <View style={styles.initTime}>
          <Text style={styles.timeTitle}>Concentration:</Text>
          <NumericInput
            onChange={value => setInitConcentration(value)} 
            step={1}
            value={initConcentration}
            borderColor={Colors.grey}
            totalWidth={110}
            totalHeight={38}
            textColor={Colors.light}
            rightButtonBackgroundColor={Colors.grey}
            leftButtonBackgroundColor={Colors.grey}
            iconStyle={{color: Colors.light}}
            rounded={true}
            containerStyle	={{alignSelf: 'center', marginVertical: 5}}
          />
        </View>
        <View style={styles.initTime}>
          <Text style={styles.timeTitle}>Pause:</Text>
          <NumericInput
            onChange={value => setInitRelax(value)} 
            step={1}
            value={initRelax}
            borderColor={Colors.grey}
            totalWidth={110}
            totalHeight={38}
            textColor={Colors.light}
            rightButtonBackgroundColor={Colors.grey}
            leftButtonBackgroundColor={Colors.grey}
            iconStyle={{color: Colors.light}}
            rounded={true}
            containerStyle={{alignSelf: 'center', marginVertical: 5}}
          />
        </View>
        <View style={styles.initTime}>
          <Text style={styles.timeTitle}>Habitude à implémenter:</Text>
          <TextInput
            multiline={true}
            value={initHabbit}
            style={{backgroundColor: Colors.grey, width: '80%', padding: 10, alignSelf: 'center'}}
            onChangeText={(value) => setInitHabbit(value)}
          />
        </View>
        <Button
          mode="contained"
          color={Colors.gold}
          style={{marginTop: 15, marginBottom: 10, width: '40%', alignSelf: 'center'}}
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
      color: Colors.gold,
      fontWeight: 'bold',
      fontStyle: 'italic'
    },
    subtitle: {
      paddingHorizontal: 45,
      textAlign: 'center',
      marginBottom: 25,
      fontSize: 18
    },
    card: {
      backgroundColor: Colors.dark,
      textTransform: 'uppercase',
      width: '100%',
      textAlign: 'center',
      paddingVertical: 10,
      marginTop: 0
    },
    times: {
      backgroundColor: Colors.darkGrey,
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
      fontSize: 16,
      alignSelf: 'center',
      marginVertical: 5,
      color: Colors.light
    },
  });