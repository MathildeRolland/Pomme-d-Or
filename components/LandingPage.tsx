import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LandingPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenue sur  
                <Text style={styles.appName}> Pomme d'Or...</Text>
            </Text>
            <Text style={styles.text}>Booste ta concentration tout en créant de nouvelles habitudes!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 9,
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