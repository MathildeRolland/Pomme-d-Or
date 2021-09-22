import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './vars/colors';

// == COMPONENTS
import Header from './components/Menu/Header';
import LandingPage from './screens/LandingPage';
import HomePage from './screens/HomePage';
import Options from './screens/Options';
import Footer from './components/Footer';

export default function App() {
  const [concentrationTime, setConcentrationTime] = useState('25');
  const [relaxTime, setRelaxTime] = useState('5');
  const [currentHabbit, setCurrentHabbit] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#F7B53B" />
      <LinearGradient
                style={styles.container}
                colors={[Colors.light, Colors.light, Colors.gold]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
      >
        <Header />
        {/* <LandingPage /> */}
        <HomePage 
          concentrationTime={concentrationTime}
          relaxTime={relaxTime}
          setConcentrationTime={setConcentrationTime}
          setRelaxTime={setRelaxTime}
        />
        {/* <Options 
          concentrationTime={concentrationTime}
          relaxTime={relaxTime}
          setConcentrationTime={setConcentrationTime}
          setRelaxTime={setRelaxTime}
          currentHabbit={currentHabbit}
          setCurrentHabbit={setCurrentHabbit}
        /> */}
        <Footer />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
