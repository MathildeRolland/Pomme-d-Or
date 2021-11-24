import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../../assets/vars/colors'
import { LinearGradient } from 'expo-linear-gradient';
import NumericInput from 'react-native-numeric-input';
import { Button } from 'react-native-paper';
import { initConcentrationTime, initRelaxTime, setNewConcentrationTime, setNewRelaxTime } from '../redux/actions';

// == COMPONENTS
import Header from '../../src/components/Menu/Header';
import Footer from '../../src/components/Footer';
import { NavigationContainer } from '@react-navigation/native';



export default function LandingPage({ navigation }) {
  const dispatch = useDispatch();
  const [ initConcentration, setInitConcentration ] = useState<number | null>(0);
  const [ initRelax, setInitRelax ] = useState<number | null>(0);

  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.light, Colors.light, Colors.gold]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
    >
      <View>
          <Text style={styles.title}>Bienvenue sur  
              <Text style={styles.appName}> Pomme d'Or...</Text>
          </Text>
          <Text style={styles.subtitle}>Booste ta concentration tout en créant de nouvelles habitudes!</Text>
      </View>
      <View style={styles.times}>
        <Text style={{...styles.timeTitle, ...styles.card}}>Initialise tes temps:</Text>
        <View style={styles.initTime}>
          <Text style={styles.timeTitle}>Concentration:</Text>
          <NumericInput
            onChange={value => setInitConcentration(value)} 
            step={5}
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
            onChange={value => setInitRelax(value*60)} 
            step={1}
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
        <Button
          mode="contained"
          color={Colors.gold}
          style={{marginTop: 15, marginBottom: 10, width: '40%', alignSelf: 'center'}}
          onPress={() => {
            dispatch(initConcentrationTime(initConcentration*60));
            dispatch(initRelaxTime(initRelax*60));
            dispatch(setNewConcentrationTime(initConcentration*60));
            dispatch(setNewRelaxTime(initRelax*60));
            navigation.navigate('HomePage');
          }}
        >
          Let's go!
        </Button>
      </View>
      <Footer />
    </LinearGradient>
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
      marginVertical: 25,
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