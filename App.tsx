import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Bienvenue sur  
        <Text style={styles.appName}> Pomme d'Or...</Text>
      </Text>
      <Text style={styles.text}>Booste ta concentration tout en créant de nouvelles habitudes!</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  appName: {
    color: "#F7B53B",
  },
  text: {
    width: 250,
    textAlign: 'center',
    marginBottom: 30,
  }
});
