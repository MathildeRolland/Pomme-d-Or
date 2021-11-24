import { StatusBar } from 'expo-status-bar';
import React from 'react';


// REDUX
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

// == NAVIGATION
import { AppNavigation } from './src/navigation';

// == COMPONENTS
// import Header from './src/components/Menu/Header';
// import LandingPage from './src/screens/LandingPage';
// import HomePage from './src/screens/HomePage';
// import Options from './src/screens/Options';
// import Footer from './src/components/Footer';

export default function App() {

  return (
    <Provider store={store}>
        <AppNavigation />
        <StatusBar style="auto" backgroundColor="#F7B53B" />
    </Provider>
  );
}


