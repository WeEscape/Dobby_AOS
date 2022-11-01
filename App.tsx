import React from 'react';
import { ThemeProvider } from '@rneui/themed';
import Router from './src/routes/Router';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;
