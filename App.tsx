import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './assets/vars/colors';

// REDUX
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

// == COMPONENTS
import Header from './src/components/Menu/Header';
import LandingPage from './src/screens/LandingPage';
import HomePage from './src/screens/HomePage';
import Options from './src/screens/Options';
import Footer from './src/components/Footer';

export default function App() {

  return (
    <Provider store={store}>
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
          <HomePage />
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
    </Provider>
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
