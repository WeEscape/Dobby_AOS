import React from 'react';
import { ThemeProvider } from '@rneui/themed';
import Router from './src/routes/Router';
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
