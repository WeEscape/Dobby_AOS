import React, { useEffect } from 'react';
import { ThemeProvider } from '@rneui/themed';
import Router from './src/routes/Router';
import { Provider } from 'react-redux';
import store from './src/store';
import { Image, Text, Button, Icon } from '@rneui/themed';
import SplashScreen2 from './src/components/common/splash/index';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <SplashScreen2 />
        {/* <Text> 안녕</Text> */}
        {/* <Router /> */}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
