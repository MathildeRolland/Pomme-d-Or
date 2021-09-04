import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#373737" />
      <LinearGradient
        style={styles.container}
        colors={["#F7F7FF", "#F7F7FF", "#F7B53B"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      >
        <Text style={styles.text}>Bienvenue sur  
          <Text style={styles.appName}> Pomme d'Or...</Text>
        </Text>
        <Text style={styles.text}>Booste ta concentration tout en créant de nouvelles habitudes!</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    color: "#F7B53B",
  },
  text: {
    width: 250,
    textAlign: 'center',
    marginBottom: 30,
  },
});
