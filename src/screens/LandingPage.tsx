import React from 'react';
import { StyleSheet, Text, ImageBackground,View } from 'react-native';
import { useSelector } from 'react-redux';
import { Dark, Light } from '../../assets/vars/colors'
import { RootState } from '../redux';

// == COMPONENTS
import Footer from '../../src/components/Footer';
import Settings from '../components/Settings';

// == NAVIGATION
import { LandingPageProps } from '../navigation/navigationTypes';


export default function LandingPage({ navigation }: LandingPageProps) {

  const { theme } = useSelector((state: RootState) => state.utils);

  return (
    <View style={[styles.container, theme === 'light' ? {backgroundColor: Light.primary} : {backgroundColor: Dark.dark}]}>
      <Text style={[styles.subtitle, theme === "light" ? {backgroundColor: Light.secondary, color: Light.text} : {backgroundColor: Dark.primary, color: Dark.text}]}>Booste ta concentration tout en créant de nouvelles habitudes!</Text>
      <Settings />

      <Footer />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignSelf: 'center'
    },
    subtitle: {
      paddingHorizontal: 45,
      textAlign: 'center',
      fontSize: 18,
      paddingVertical: 10,
      marginVertical: 35,
      width: '100%'
    }
});