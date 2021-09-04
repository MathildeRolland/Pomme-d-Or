import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LandingPage() {
    return (
        <View style={styles.container}>
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
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    appName: {
      color: "#F7B53B",
      fontWeight: 'bold',
      fontStyle: 'italic'
    },
    text: {
      width: 250,
      textAlign: 'center',
      margin: 20,
      fontSize: 16
    },
  });