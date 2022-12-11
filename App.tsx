import React, { useEffect } from 'react';
import { ThemeProvider } from '@rneui/themed';
import Router from './src/routes/Router';
import { Provider } from 'react-redux';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import store from './src/store';
import { createAppContainer } from 'react-navigation';
import { Image, Text, Button, Icon } from '@rneui/themed';
import SplashScreen2 from './src/components/common/splash/index';
import SplashScreen from 'react-native-splash-screen';
import { API_HOST, GOOGLE_CLIENT_ID } from '@env';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    // GoogleSignin.configure({
    //   webClientId: `${GOOGLE_CLIENT_ID}`,
    //   offlineAccess: false,
    // });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        {/* <SplashScreen2 /> */}
        {/* <Text> 안녕</Text> */}
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
